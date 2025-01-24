import { CdkDragDrop, CdkDragEnd, CdkDragEnter, CdkDragExit, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Descriptor } from '../../../../domain/levels';
import {MatExpansionModule} from '@angular/material/expansion';
import { Group, GroupGroup, GroupSubject } from '../../groups.service';

@Component({
  selector: 'app-floating',
  imports: [
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule
  ],
  templateUrl: './floating.component.html',
  styleUrl: './floating.component.css'
})
export class FloatingComponent {
  public group = input.required<Group|undefined>();
  protected isMinimized = false;

  onDragStart(event: CdkDragStart) {
    document.body.style.cursor = 'grabbing';
  }
  onDragEnd(event: CdkDragEnd) {
    document.body.style.cursor = 'default';
  }
  minimize() {
    this.isMinimized = !this.isMinimized;
  }
  drop(ev: CdkDragDrop<GroupSubject[]>, group:GroupGroup) {
    const groupSubject:GroupSubject = ev.previousContainer.data[ev.previousIndex]
    if(!group.subjects.find(s => s.id === groupSubject.id)){
      group.subjects.push(groupSubject)
    }
  }
  close() {
    // Implementa la lógica de cierre según tus necesidades
  }
}
