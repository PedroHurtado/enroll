import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../levels/status';
import { ActivatedRoute } from '@angular/router';

import { Subject } from './subject';


@Component({
  selector: 'app-subjects',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HeaderComponent,
    ContainerComponent,
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
  protected subjects: Subject[] = [];
  protected currentSubject?: Subject|undefined;
  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');

  constructor(
    private route: ActivatedRoute,
  ) {

  }

  protected update(id: string): void {
      const modeToUpdate = this.subjects.find(subject => subject.id === id);
      if (modeToUpdate) {
        this.currentSubject = modeToUpdate;
        this.form.setValue({ name: modeToUpdate.name });
        this.status = Status.Update;
        this.input()?.nativeElement.focus();
      }
    }

    protected remove(id: string): void {
      const levelToRemove = this.subjects.find(subject => subject.id === id);
      if (levelToRemove) {
        this.subjects = this.subjects.filter(subject => subject.id !== id);
        this.resetForm();
      }
    }

    protected submit(): void {
      const { name } = this.form.value;
      if (!name) return;

      if (this.status === Status.Add) {
        this.subjects.push({
          id: crypto.randomUUID(),
          name:name
        });
      } else if (this.status === Status.Update && this.currentSubject) {
        const updatedLevel = {
          id: this.currentSubject.id,
          name,
        };
        const index = this.subjects.indexOf(this.currentSubject);
        this.subjects[index] = updatedLevel;
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

}
