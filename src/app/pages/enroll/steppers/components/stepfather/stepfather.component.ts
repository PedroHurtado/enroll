import { Component } from '@angular/core';
import { ImageuploadComponent } from '../../../../../components/imageupload/imageupload.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepfather',
  imports: [ImageuploadComponent, ReactiveFormsModule],
  templateUrl: './stepfather.component.html',
  styleUrl: './stepfather.component.css'
})
export class StepfatherComponent {
  form= new FormGroup({
    anverso: new FormControl(null),
    reverso:new FormControl(null),
  })
  constructor(form:FormBuilder) {


  }
  submit(){
    console.log(this.form.value)
  }
}
