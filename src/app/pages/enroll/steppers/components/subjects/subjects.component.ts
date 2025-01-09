import { Component } from '@angular/core';
import { SortedlistComponent } from '../../../../../components/sortedlist/sortedlist.component';
import { SelectedlistComponent } from '../../../../../components/selectedlist/selectedlist.component';
import { SubjectsService } from './subjects.service';
import { Subjects } from './subjects';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-subjects',
  imports: [
    //SortedlistComponent,
    //SelectedlistComponent,
    ReactiveFormsModule,
    MatRadioModule
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  protected form = new FormGroup({
    specializationSubjects: new FormControl(),
    electives: new FormControl(),
    hour_elective: new FormControl(4),
    religion: new FormControl()
  })
  protected readonly subjects: Subjects;
  protected subjectsElectives: string[];
  constructor(service: SubjectsService) {
    this.subjects = service.getAll();
    this.subjectsElectives = [...this.subjects.electives.subjects];
    this.form.patchValue({
      specializationSubjects: this.subjects.specializationSubjects.subjects,
      electives: this.subjectsElectives,
      religion: this.subjects.religion.subjects
    });
    this.form.controls.specializationSubjects.setValidators(
      selectedlistValidator(this.subjects.specializationSubjects.limit)
    );
    this.form.controls.electives.setValidators(
      selectedlistValidator(this.subjects.electives.limit)
    );
    this.form.controls.religion.setValidators(
      selectedlistValidator(this.subjects.religion.limit)
    );
  }
  submit(){
    console.log(this.form.value);
  }
  protected onModelChange(value: any[]) {
    this.subjectsElectives = this.subjects.electives.subjects.filter(item=>!value.includes(item));
    this.form.patchValue({
      electives: this.subjectsElectives
    });

  }
}
