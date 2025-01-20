import { Component, inject, signal, viewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sidenav } from '../../../components/sidenav';
import { MatListModule } from '@angular/material/list';
import { GroupsService, Course } from './groups.service';
import { Descriptor } from '../../domain/levels';
import { GroupModalityComponent } from './components/group-modality/group-modality.component';
import { GroupElectivesComponent } from './components/group-electives/group-electives.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-groups',
  imports: [
    MatSidenavModule,
    MatListModule,
    GroupModalityComponent,
    GroupElectivesComponent,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements Sidenav {
  private _sidenav = viewChild<MatSidenav>('snav');

  protected readonly isMobile = signal<boolean>(false);
  protected courses = signal<Descriptor[]>([]);
  protected selectedCourse: Descriptor | undefined;
  protected course = signal<Course | undefined>(undefined);
  protected readonly dialog = inject(MatDialog);
  protected openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        course:this.course() as Descriptor
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(private service: GroupsService) {
    this.initializeCourses();
  }

  private initializeCourses(): void {
    const courses = this.loadCourses();
    this.courses.set(courses);

    if (courses.length > 0) {
      this.selectedCourse = courses[0];
      this.course.set(this.loadCourse(this.selectedCourse.id));
    }
  }

  private loadCourses(): Descriptor[] {
    return this.service.getCourses();
  }

  private loadCourse(id: string): Course | undefined {
    return this.service.getCourse(id);
  }

  get canOpen(): boolean {
    return true;
  }

  open(): void {
    this._sidenav()?.toggle();
  }

  protected handlerClick(course: Descriptor, ev: Event): void {
    ev.preventDefault();
    this.selectedCourse = course;

    if (this.selectedCourse) {
      this.course.set(this.loadCourse(this.selectedCourse.id));
    }
  }
  protected getKeys(obj: any): any[] {
    return Object.entries(obj)
  }
}
