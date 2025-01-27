import { Component, computed, input, Signal } from '@angular/core';
import { DescriptorWithEnrolls, GroupSubject, Modality } from '../../groups.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Descriptor } from '../../../../domain/levels';
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
  canEnter(){
    return false;
  }
  protected getData(
    modality:Descriptor,
    descripor:DescriptorWithEnrolls[],
    type:string
  ):GroupSubject[]{
    return descripor.map(({id,name,enrolls}, index) => ({
      modalityId:modality.id,
      modalityname:modality.name,
      id,
      name,
      type,
      position: index + 1,
      total:enrolls.length
    }));
  }
}
