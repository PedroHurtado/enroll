import { Component, input } from '@angular/core';
import { PositionWhitEnrolls } from '../../groups.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-group-electives',
  imports: [
    MatButtonModule,
    RouterLink,
    DragDropModule
  ],
  templateUrl: './group-electives.component.html',
  styleUrl: './group-electives.component.css'
})
export class GroupElectivesComponent {
  electives=input<PositionWhitEnrolls[]|undefined>(undefined)
  courseId= input<string>()

  protected getEnrollsCountByPosition(elective: any, position: number): number {
    const pos = elective.positions.find((p: any) => p.position === position);
    return pos ? pos.enrolls.length : 0;
  }
  canDrop(){
    return false;
  }
}
