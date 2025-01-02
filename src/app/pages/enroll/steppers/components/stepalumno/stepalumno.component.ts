import { Component } from '@angular/core';
import { ImageuploadComponent } from '../../../../../components/imageupload/imageupload.component';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';
@Component({
  selector: 'app-stepalumno',
  imports: [
    ImageuploadComponent,
    FileuploadComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './stepalumno.component.html',
  styleUrl: './stepalumno.component.css'
})
export class StepalumnoComponent {
  protected form=new FormGroup({
    nre: new FormControl(null, Validators.required),
    dni_observe: new FormControl(null, selectedlistValidator(1)),
    dni_reverse: new FormControl(null, selectedlistValidator(1)),
    academic_record:new FormControl(null,),
    healthcards_observe:new FormControl(null, selectedlistValidator(1)),
    healthcards_reverse:new FormControl(null, selectedlistValidator(1)),
  })
  submit(){
    console.log(this.form.value);
  }

}
