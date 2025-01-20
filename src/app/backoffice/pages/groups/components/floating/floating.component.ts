import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-floating',
  imports: [
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  templateUrl: './floating.component.html',
  styleUrl: './floating.component.css'
})
export class FloatingComponent {
  @Input() title: string = 'Floating Panel';
  isMinimized = false;

  onDragStart(event: CdkDragStart) {
    document.body.style.cursor = 'grabbing';
  }

  onDragEnd(event: CdkDragEnd) {
    document.body.style.cursor = 'default';
  }

  minimize() {
    this.isMinimized = !this.isMinimized;
  }

  close() {
    // Implementa la lógica de cierre según tus necesidades
  }
}
