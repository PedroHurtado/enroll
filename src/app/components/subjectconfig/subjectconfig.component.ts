import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-subjectconfig',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  templateUrl: './subjectconfig.component.html',
  styleUrl: './subjectconfig.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectconfigComponent {
  protected type=signal("all")
  protected form=new FormGroup({
    text:new FormControl(null,Validators.required),
    type:new FormControl("all"),
    multiple:new FormControl(true),
    limit:new FormControl(0)
  })
  constructor(){
    this.form.get('type')?.valueChanges.subscribe((newValue) => {
      if(newValue){
        this.type.set(newValue)
      }
    });
  }
  submit(){
    console.log(this.form.value)
  }
}
