import { Component, signal, viewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sidenav } from '../../../components/sidenav';
import { MatListModule } from '@angular/material/list';
import { GroupsService } from './groups.service';
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
  protected courses=signal<Descriptor[]>([])
  protected selectedCourse:Descriptor|undefined
  constructor(private service:GroupsService){
    const courses =this.loadCourses()
    this.courses.set(courses)
    if (courses.length>0){
      this.selectedCourse = courses[0]
    }
  }
  private loadCourses():Descriptor[]{
    return this.service.getCourses()
  }

  get canOpen():boolean{
    return true
  }
  open(): void {
    this._sidenav()?.toggle()
  }
  protected handlerClick(course:Descriptor, ev:Event){
    ev.preventDefault()
    this.selectedCourse=course;
    if (this.selectedCourse){
      this.service.getSubjects(this.selectedCourse.id)
    }
  }

}
