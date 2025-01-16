import { Component, signal, viewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sidenav } from '../../../components/sidenav';
import { MatListModule } from '@angular/material/list';
import { GroupsService, Data } from './groups.service';
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
  protected subjects = signal<Data[]>([]);

  constructor(private service: GroupsService) {
    this.initializeCourses();
  }

  private initializeCourses(): void {
    const courses = this.loadCourses();
    this.courses.set(courses);

    if (courses.length > 0) {
      this.selectedCourse = courses[0];
      this.subjects.set(this.loadSubjects(this.selectedCourse.id));
    }
  }

  private loadCourses(): Descriptor[] {
    return this.service.getCourses();
  }

  private loadSubjects(id: string): Data[] {
    return this.service.getSubjects(id);
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
      this.subjects.set(this.loadSubjects(this.selectedCourse.id));
    }
  }
  protected getKeys(obj:any):any[]{
    return Object.entries(obj)
  }
}
