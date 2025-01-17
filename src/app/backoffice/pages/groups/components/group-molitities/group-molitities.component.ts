import { Component, input } from '@angular/core';
import { Modality } from '../../groups.service';

@Component({
  selector: 'app-group-molitities',
  imports: [],
  templateUrl: './group-molitities.component.html',
  styleUrl: './group-molitities.component.css'
})
export class GroupMolititiesComponent {
  public modalities= input<Modality[]>()
  protected getText(length:number){
      return length===1?'Mátricula':'Matriculas'

  }
}
