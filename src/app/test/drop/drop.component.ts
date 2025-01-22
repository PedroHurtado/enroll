import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, CdkDragStart, DragDropModule } from '@angular/cdk/drag-drop';
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
  ghostItems: string[] = [];

  ngOnInit() {
    // Inicializar los elementos fantasma
    this.ghostItems = [...this.source];
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      return;
    }
    const item = event.item.data;



    if (item>=0) {
      this.target.push(this.source[item]);

    }
  }

}



