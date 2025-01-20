import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Descriptor } from '../../../../domain/levels';

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) protected data: { course: Descriptor}){

  }
}
