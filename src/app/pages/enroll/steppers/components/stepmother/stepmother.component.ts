import { Component } from '@angular/core';
import { ImageuploadComponent } from '../../../../../components/imageupload/imageupload.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepmother',
  imports: [ImageuploadComponent, ReactiveFormsModule],
  templateUrl: './stepmother.component.html',
  styleUrl: './stepmother.component.css'
})
export class StepmotherComponent {
  protected form = new FormGroup({
    dni_observe: new FormControl(null),
    dni_reverse: new FormControl(null),
  })
  submit(){
    console.log(this.form.value)
  }
}
