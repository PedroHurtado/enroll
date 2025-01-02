import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from '../../../../../components/selectedlist/selectedlistvalidator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-healstep',
  imports: [FileuploadComponent, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './healstep.component.html',
  styleUrl: './healstep.component.css'
})
export class HealstepComponent {
  constructor(private route:Router) { }
  protected form=new FormGroup({
    condition1: new FormControl(false),
    condition2: new FormControl(false),
    condition3: new FormControl(false),
    condition4: new FormControl(false),
    files: new FormControl(null)
  });
  submit(){
    console.log(this.form.value);
    this.route.navigate(['/enrolls/confirm']);
  }
}
