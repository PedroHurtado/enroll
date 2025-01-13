import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContainerComponent } from '../../../components/container/container.component';
import { Status } from '../levels/status';
import { LevelService } from '../levels/level.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LevelDomain, CourseDomain } from '../../domain/levels';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-courses',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    ContainerComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  protected courses:CourseDomain [] = []
  protected currentCourse?: CourseDomain|undefined
  protected currentLevel?:LevelDomain|undefined
  protected status: Status= Status.Add
  protected input= viewChild<ElementRef>('input');
  protected form: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  public constructor(
    private route: ActivatedRoute,
    private levelService: LevelService,
  ) {
    const levelId = this.route.snapshot.paramMap.get('id')
    this.loadLevel(levelId || '' )
    this.loadCourses()
  }
  private loadCourses() {
    this.courses = this.currentLevel?.courses || []
  }

  private loadLevel(id: string) {
    this.currentLevel = this.levelService.get(id)
  }
  protected remove(course: CourseDomain) {
    this.currentLevel?.removeCourse(course)
    this.reset()
  }
  protected update(course: CourseDomain) {
    this.currentCourse = course;
    this.form.setValue({
      name:course.name
    })
    this.status =Status.Update
    this.ngAfterViewInit()
  }
  protected submit(){

    const {name} = this.form.value
    if(!name){
      this.reset()
      return
    }
    if(this.status === Status.Add && this.currentLevel){
      this.currentLevel.addCourse(CourseDomain.create(name))
    }else if(
      this.status === Status.Update
      && this.currentCourse
      && this.currentLevel
    ){
      this.currentCourse.update(name)
      this.currentLevel.updateCourse(this.currentCourse)
    }
    this.reset()
  }
  protected reset() {
    this.status = Status.Add
    this.form.reset()
    this.currentCourse = undefined;
    this.ngAfterViewInit()
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
}
