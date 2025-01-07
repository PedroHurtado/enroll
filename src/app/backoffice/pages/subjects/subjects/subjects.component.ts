import { ChangeDetectionStrategy, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Status } from '../../levels/status';
import { ItemsService } from '../../../../components/previesubject/items.service';
import { CourseDomain, LevelDomain, ModeDomain, SubjectDomain } from '../../../domain/levels';


@Component({
  selector: 'app-subjects',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsComponent {
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  public subjects= input<SubjectDomain[]>();
  public currenLevelDomain=input<LevelDomain>()
  public currentCourseDomain=input<CourseDomain>();
  public currentModeDomain= input<ModeDomain>();
  private currentSubject:SubjectDomain|undefined;

  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');
  onChangeView = output();
  constructor(
    private itemService: ItemsService,

  ) {


  }


  protected update(subject: SubjectDomain): void {
    this.currentSubject = subject
    this.status = Status.Update;
    this.form.setValue({
      name:subject.name
    })
    this.ngAfterViewInit()
  }

  protected remove(subject: SubjectDomain): void {
    this.currentCourseDomain()?.removeSubject(subject)
    this.resetForm()
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) return;

    if (this.status === Status.Add &&
      this.currenLevelDomain() && this.currentCourseDomain()) {
      this.currentCourseDomain()?.addSubject(
        SubjectDomain.create(name)
      );
    } else if (this.status === Status.Update && this.currentSubject) {
        this.currentSubject.updateName(name)
    }

    this.resetForm();
  }

  protected resetForm(): void {
    this.form.reset();
    this.status = Status.Add;
    this.currentSubject=undefined
    this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
  next() {
    this.itemService.items = this.subjects()?.map(s => s.name) || [];
    this.onChangeView.emit()
  }

}
