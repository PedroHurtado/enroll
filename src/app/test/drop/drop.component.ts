import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, DragDropModule } from '@angular/cdk/drag-drop';
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
  onEnter(ev:CdkDragEnter<string>){
    const draggedElement = ev.item.element.nativeElement;

    //draggedElement.style.setProperty('position', 'relative', 'important');
    //draggedElement.style.setProperty('left', '0', 'important');
    //draggedElement.style.setProperty('opacity', '1', 'important');
    //console.log(draggedElement.parentNode)

  }
  onExit(ev:CdkDragExit<string>){
    const draggedElement = ev.item.element.nativeElement;
    //draggedElement.style.removeProperty('position');
    //draggedElement.style.removeProperty('left');
    //draggedElement.style.removeProperty('opacity');
    //console.log(draggedElement.parentNode)
  }
}



