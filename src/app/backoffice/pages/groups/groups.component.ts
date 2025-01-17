import { Component, signal, viewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sidenav } from '../../../components/sidenav';
import { MatListModule } from '@angular/material/list';
import { GroupsService,  Course } from './groups.service';
import { Descriptor } from '../../domain/levels';

@Component({
  selector: 'app-groups',
  imports: [
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements Sidenav {
  private _sidenav = viewChild<MatSidenav>('snav');

  protected readonly isMobile = signal<boolean>(false);
  protected courses = signal<Descriptor[]>([]);
  protected selectedCourse: Descriptor | undefined;
  protected course = signal<Course|undefined>(undefined);

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

  private loadCourse(id: string): Course|undefined {
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
  protected getKeys(obj:any):any[]{
    return Object.entries(obj)
  }
}
