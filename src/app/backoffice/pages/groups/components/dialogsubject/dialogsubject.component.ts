import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GroupSubject } from '../../groups.service';

@Component({
  selector: 'app-dialogsubject',
  imports: [
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ],
  templateUrl: './dialogsubject.component.html',
  styleUrl: './dialogsubject.component.css'
})
export class DialogsubjectComponent {
  form = new FormGroup({
    total:new FormControl(1,{nonNullable:true,validators:[Validators.required] })
  })
  constructor(
      private dialogRef: MatDialogRef<DialogsubjectComponent>,
      @Inject(MAT_DIALOG_DATA) protected data: { groupSubject: GroupSubject}){
      this.form.setValue({
        total:data.groupSubject.total
      })

  }
 submit(){
  this.dialogRef.close(this.form.controls.total.getRawValue())
 }
}
