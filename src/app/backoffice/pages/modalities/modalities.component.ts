import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../levels/status';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mode } from './mode';
import { ModalitiesService } from './modalities.service';
import { CoursesService } from '../courses/courses.service';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-modalities',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    HeaderComponent,
    ContainerComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './modalities.component.html',
  styleUrl: './modalities.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalitiesComponent {
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    common: new FormControl(false),
    specific: new FormControl(false),
    elective: new FormControl(false),
    electiveOne: new FormControl(false)
  });
  protected modalities: Mode[] = [];
  protected currentCourse?: Courses | undefined;
  protected currentMode?: Mode | undefined;
  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private readonly modalitiesService: ModalitiesService
  ) {
    this.loadCourse(route.snapshot.params['id']);
  }

  private loadCourse(id: string): void {
    this.currentCourse = this.coursesService.get(id);
  }

  protected update(mode:Mode): void {
    if (mode) {
      const { name, common, specific, elective, electiveOne } = mode;
      this.currentMode = mode;
      this.form.setValue({
        name,
        common,
        specific,
        elective,
        electiveOne
      });
      this.status = Status.Update;
      this.ngAfterViewInit();
    }
  }

  protected remove(mode:Mode): void {

    if (mode) {
      this.modalitiesService.remove(mode);
      this.modalities = this.modalities.filter(m=>m!==mode);
      this.currentMode=undefined;
      this.resetForm();
    }
  }

  protected submit(): void {
    if(!this.form.get('name')) {
      return;
    }
    if (this.status === Status.Add && this.currentCourse) {

      this.currentMode = this.modalitiesService.add(
        this.form.value as Mode,
        this.currentCourse.id);
      this.modalities.push(this.currentMode)

    } else if (
      this.status === Status.Update &&
      this.currentMode &&
      this.currentCourse
    ) {
      const updateMode:Mode = {
        ...this.form.value as Mode,
        id: this.currentMode.id,
        courseId: this.currentCourse.id
      }

      const index = this.modalities.indexOf(this.currentMode);
      this.modalities[index] = updateMode;
      this.modalitiesService.update(updateMode);


    }
    this.resetForm();
  }

  protected resetForm(): void {
    this.form.reset();
    this.status = Status.Add;
    this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
}
