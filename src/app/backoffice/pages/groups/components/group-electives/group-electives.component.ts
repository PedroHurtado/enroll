import { Component, input } from '@angular/core';
import { PositionWhitEnrolls } from '../../groups.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-group-electives',
  imports: [
    MatButtonModule

  ],
  templateUrl: './group-electives.component.html',
  styleUrl: './group-electives.component.css'
})
export class GroupElectivesComponent {
  electives=input<PositionWhitEnrolls[]|undefined>(undefined)

  protected getEnrollsCountByPosition(elective: any, position: number): number {
    const pos = elective.positions.find((p: any) => p.position === position);
    return pos ? pos.enrolls.length : 0;
  }
}
