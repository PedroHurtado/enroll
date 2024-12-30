import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepsituation',
  imports: [FileuploadComponent, ReactiveFormsModule],
  templateUrl: './stepsituation.component.html',
  styleUrl: './stepsituation.component.css'
})
export class StepsituationComponent {
  form=new FormGroup({
    files: new FormControl([])
  })
  submit(): void {
    console.log(this.form.value);
  }
}
