import { CdkDragDrop, CdkDragEnd, CdkDragEnter, CdkDragExit, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, inject, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Descriptor } from '../../../../domain/levels';
import {MatExpansionModule} from '@angular/material/expansion';
import { Group, GroupGroup, GroupSubject } from '../../groups.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogsubjectComponent } from '../dialogsubject/dialogsubject.component';

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
  private index:number=-1
  protected readonly dialog = inject(MatDialog);
  protected minimize() {
    this.isMinimized = !this.isMinimized;
  }
  protected isSelected(index:number){
    return this.index === index;
  }
  protected drop(ev: CdkDragDrop<GroupSubject[]>, group:GroupGroup, index:number) {
    const groupSubject:GroupSubject = ev.previousContainer.data[ev.previousIndex]
    this.index = index;
    this.openDialog(group,groupSubject)
  }
  protected remove(group:GroupGroup, groupSubject:GroupSubject){
    const index = group.subjects.indexOf(groupSubject)
    if(index>-1){
      group.subjects.splice(index,1)
    }
  }

    protected openDialog(group:GroupGroup,groupSubject:GroupSubject ) {
      const dialogRef = this.dialog.open(DialogsubjectComponent,{
        data:{
          groupSubject:groupSubject
        },
        ariaLabel: 'Selección de alumnos',
        role: 'dialog'
      });

      dialogRef.afterClosed().subscribe((result:number|undefined) => {
        if(result){
          groupSubject.total = result
          group.subjects.push(groupSubject)
        }
      });
    }
}
