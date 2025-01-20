import { ChangeDetectionStrategy, Component, Inject, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Descriptor } from '../../../../domain/levels';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  protected form = new FormGroup({
    groups:new FormControl(1,{nonNullable:true,validators:[Validators.required] })
  })
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: { course: Descriptor}
  ){

  }
  protected submit(){
    this.dialogRef.close(this.form.controls.groups.getRawValue())
  }
}
