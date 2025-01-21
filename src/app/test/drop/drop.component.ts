import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragMove, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
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

  isDragging = false;
  currentDragItem: any = null;



  onDrop(event: CdkDragDrop<string[]>) {

    //this.target.push(this.currentDragItem);
    console.log("Drop")


  }
}



