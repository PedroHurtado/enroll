import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';

import { Courses } from './courses';
import { Status } from '../levels/status';
import { LevelService } from '../levels/level.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Level } from '../levels/level';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    HeaderComponent,
    ContainerComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  protected courses: Courses[] = []
  protected currentCourse?: Courses|undefined
  protected status: Status= Status.Add
  protected currentLevel:Level|undefined
  protected input= viewChild<ElementRef>('input');
  protected form: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      common: new FormControl(false),
      specific: new FormControl(false),
      elective: new FormControl(false),
      electiveOne: new FormControl(false)
    });
  public constructor(
    private route: ActivatedRoute,
    private levelService: LevelService,
    private coursesService: CoursesService
  ) {
    const levelId = this.route.snapshot.paramMap.get('id')
    this.loasLevel(levelId || '' )
  }
  private loasLevel(id: string) {
    this.currentLevel = this.levelService.get(id)
  }
  protected remove(course: Courses) {
    this.courses = this.courses.filter(c => c!== course);
    this.coursesService.remove(course)
    this.reset()
  }
  protected update(course: Courses) {
    const courseToUpdate = this.courses.find(c => c === course)
    if (courseToUpdate) {
      this.currentCourse = courseToUpdate
      const {name,common,specific,elective,electiveOne} = courseToUpdate
      this.form.setValue({
        name,
        common,
        specific,
        elective,
        electiveOne
      })
      this.status = Status.Update
      this.ngAfterViewInit()
    }
  }
  protected submit(){

    if (!this.form.get("name")){
      return
    }

    if(this.status === Status.Add && this.currentLevel){
      const course = this.coursesService.add(
        this.form.value, this.currentLevel.id
      )
      this.courses.push(course)

    }else if(
      this.status === Status.Update
      && this.currentCourse
      && this.currentLevel
    ){
      const courseToUpdate = {
        ...(this.form.value as Courses),
        levelId: this.currentLevel.id
      }
      const index = this.courses.indexOf(this.currentCourse)
      this.courses[index] = courseToUpdate;
      this.coursesService.update(courseToUpdate)
      this.currentCourse = undefined

    }
    this.reset()
  }
  protected reset() {
    this.status = Status.Add
    this.form.reset()
    this.ngAfterViewInit()
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
}
