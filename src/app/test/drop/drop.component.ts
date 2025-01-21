import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drop',
  imports: [
    DragDropModule
  ],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css'
})
export class DropComponent {
  source:any[] =[1,2,3,4]
  target:any[]=[]
  onDrop(ev:CdkDragDrop<string[]>){
    const data = this.source[ev.previousIndex]
    this.target.push(data)
  }
}
