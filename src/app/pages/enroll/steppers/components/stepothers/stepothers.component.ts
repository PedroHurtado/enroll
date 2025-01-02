import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';

@Component({
  selector: 'app-stepothers',
  imports: [FileuploadComponent, ReactiveFormsModule],
  templateUrl: './stepothers.component.html',
  styleUrl: './stepothers.component.css'
})
export class StepothersComponent {
  protected form = new FormGroup({
    school_insurance: new FormControl(null, selectedlistValidator(1)),
    ampa: new FormControl(null),
    school_transportation: new FormControl(null),
  })
  submit(){
    console.log(this.form.value);
  }
}
