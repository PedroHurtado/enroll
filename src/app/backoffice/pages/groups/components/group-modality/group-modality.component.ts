import { Component, input } from '@angular/core';
import { Modality } from '../../groups.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-group-modality',
  imports: [
    MatButtonModule,
    RouterLink,
    DragDropModule
  ],
  templateUrl: './group-modality.component.html',
  styleUrl: './group-modality.component.css'
})
export class GroupModalityComponent {
  public modalities= input<Modality[]>()
  public courseId = input<string>()
  protected getText(length:number){
      return length===1?'Mátricula':'Matriculas'

  }
}
