import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';

@Component({
  selector: 'app-stepsituation',
  imports: [FileuploadComponent, ReactiveFormsModule],
  templateUrl: './stepsituation.component.html',
  styleUrl: './stepsituation.component.css'
})
export class StepsituationComponent {
  protected form=new FormGroup({
    files: new FormControl(null,selectedlistValidator(1)),
  })
  submit(): void {
    console.log(this.form.value);
  }
}
