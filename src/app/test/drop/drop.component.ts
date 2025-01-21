import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drop',
  imports: [
    DragDropModule
  ],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css'
})
export class DropComponent {

  protected source:any[] =[1,2,3,4]
  protected target:any[]=[]

  protected onDrop(ev:CdkDragDrop<string[]>){
    const data = this.source[ev.previousIndex]
    this.target.push(data)
  }
  protected onMove(ev:CdkDragMove<string[]>){
    console.log("On Move")
  }


}
