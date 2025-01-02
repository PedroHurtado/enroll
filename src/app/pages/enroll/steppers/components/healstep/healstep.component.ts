import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';
@Component({
  selector: 'app-healstep',
  imports: [FileuploadComponent, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './healstep.component.html',
  styleUrl: './healstep.component.css'
})
export class HealstepComponent {
  protected form=new FormGroup({
    condition1: new FormControl(null),
    condition2: new FormControl(null),
    condition3: new FormControl(null),
    condition4: new FormControl(null),
    files: new FormControl(null)
  });
  submit(){
    console.log(this.form.value);
  }
}
