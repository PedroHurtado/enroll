import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContainerComponent } from '../../../components/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../levels/status';
import { ActivatedRoute} from '@angular/router';
import { CourseDomain, LevelDomain, ModeDomain } from '../../domain/levels';
import { LevelService } from '../levels/level.service';

@Component({
  selector: 'app-modalities',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    ContainerComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './modalities.component.html',
  styleUrl: './modalities.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalitiesComponent {
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  protected modalities: ModeDomain[] = [];
  protected currentLevel?: LevelDomain | undefined
  protected currentCourse?: CourseDomain | undefined;
  protected currentMode?: ModeDomain | undefined;
  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');

  constructor(
    private levelService: LevelService,
    private route: ActivatedRoute,

  ) {
    this.loadLevel(route.snapshot.params['levelId']);
    this.loadCourse(route.snapshot.params['id'])
    if(this.currentCourse){
      this.loadModalities(this.currentCourse)
    }
  }


  private loadLevel(id: string): void {
    this.currentLevel = this.levelService.get(id)
  }
  private loadCourse(id:string){
     this.currentCourse = this.currentLevel?.courses.find(c=>c.id===id)
  }
  private loadModalities(course:CourseDomain){
    this.modalities = course.modalities
  }

  protected update(mode: ModeDomain): void {
    this.currentMode = mode;
    this.form.setValue({
      name:mode.name,
    });
    this.status = Status.Update;
    this.ngAfterViewInit();
  }

  protected remove(mode: ModeDomain): void {
    this.currentCourse?.removeMode(mode);
    this.resetForm()
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) {
      this.resetForm();
      return;
    }
    if (this.status === Status.Add && this.currentLevel && this.currentCourse) {
      this.currentCourse.addMode(ModeDomain.create(name))
    } else if (
      this.status === Status.Update &&
      this.currentLevel &&
      this.currentCourse &&
      this.currentMode
    ) {
      this.currentMode.update(name)
      this.currentCourse.updateMode(this.currentMode)
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
