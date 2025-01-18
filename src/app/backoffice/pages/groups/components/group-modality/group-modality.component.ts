import { Component, input } from '@angular/core';
import { Modality } from '../../groups.service';

@Component({
  selector: 'app-group-modality',
  imports: [],
  templateUrl: './group-modality.component.html',
  styleUrl: './group-modality.component.css'
})
export class GroupMolititiesComponent {
  public modalities= input<Modality[]>()
  protected getText(length:number){
      return length===1?'Mátricula':'Matriculas'

  }
}
