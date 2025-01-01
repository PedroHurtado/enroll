import { Component } from '@angular/core';
import { SortedlistComponent } from '../../../../../components/sortedlist/sortedlist.component';
import { SelectedlistComponent } from '../../../../../components/selectedlist/selectedlist.component';
import { SubjectsService } from './subjects.service';
import { Subjects } from './subjects';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';
@Component({
  selector: 'app-subjects',
  imports: [
    SortedlistComponent,
    SelectedlistComponent,
    ReactiveFormsModule
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  protected form = new FormGroup({
    specializationSubjects: new FormControl(),
    electives: new FormControl(),
    religion: new FormControl()
  })
  protected readonly subjects: Subjects;
  constructor(service: SubjectsService) {
    this.subjects = service.getAll();
    this.form.patchValue({
      specializationSubjects: this.subjects.specializationSubjects.subjects,
      electives: this.subjects.electives.subjects,
      religion: this.subjects.religion.subjects
    });
    this.form.controls.specializationSubjects.setValidators(
      selectedlistValidator(this.subjects.electives.limit)
    );
    this.form.controls.religion.setValue(this.subjects.religion.defaultValue);
  }
  submit(){
    console.log(this.form.value);
  }
}
