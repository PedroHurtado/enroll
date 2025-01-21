import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drop',
  imports: [
    DragDropModule
  ],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css'
})
export class DropComponent {

  source: string[] = ['Item 1', 'Item 2', 'Item 3'];
  target: string[] = [];

}



