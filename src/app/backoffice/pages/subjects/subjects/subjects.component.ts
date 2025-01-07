import { ChangeDetectionStrategy, Component, ElementRef, output, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from '../../levels/status';
import { ItemsService } from '../../../../components/previesubject/items.service';
import { CourseDomain, LevelDomain, ModeDomain, SubjectDomain } from '../../../domain/levels';
import { LevelService } from '../../levels/level.service';

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
  protected subjects: SubjectDomain[] = [];

  protected currentSubject?: SubjectDomain | undefined;
  protected currenLevelDomain: LevelDomain | undefined;
  protected currentCourseDomain: CourseDomain | undefined;
  protected currentModeDomain: ModeDomain | undefined;

  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');
  onChangeView = output();
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private levelService: LevelService
  ) {
    this.loadLevel(this.route.snapshot.params["levelId"])
    this.loadCourse(this.route.snapshot.params["courseId"])

  }
  private loadLevel(id:string){
    this.currenLevelDomain = this.levelService.get(id)
  }
  private loadCourse(id:string){
    if(this.currenLevelDomain){
      this.currentCourseDomain = this.currenLevelDomain.courses.find(c=>c.id === id)
      if(this.currentCourseDomain){
        this.subjects = this.currentCourseDomain.subjects
      }
    }
  }

  protected update(subject: SubjectDomain): void {
    this.currentSubject = subject;
    this.status = Status.Update;
    this.form.setValue({
      name:subject.name
    })
    this.ngAfterViewInit()
  }

  protected remove(subject: SubjectDomain): void {
    this.currentCourseDomain?.removeSubject(subject)
    this.resetForm()
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) return;

    if (this.status === Status.Add && this.currenLevelDomain && this.currentCourseDomain) {
      this.currentCourseDomain.addSubject(
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
    this.input()?.nativeElement.focus();
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
  next() {
    this.itemService.items = this.subjects.map(s => s.name);
    this.onChangeView.emit()
  }

}
