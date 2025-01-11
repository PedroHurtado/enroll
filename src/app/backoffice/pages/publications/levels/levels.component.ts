import { Component,input} from '@angular/core';
import { Level } from '../publication';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-levels',
  imports: [MatListModule],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent {
  levels=input.required<Level[]>()
}
