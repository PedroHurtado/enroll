import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { Level } from '../levels/level';
import { LevelService } from '../levels/level.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../levels/status';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mode } from './mode';
import { ModalitiesService } from './modalities.service';

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
  protected currentLevel?: Level | undefined;
  protected currentMode?: Mode | undefined;
  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');

  constructor(
    private route: ActivatedRoute,
    private readonly levelService: LevelService,
    private readonly modalitiesService: ModalitiesService
  ) {
    this.loadLevel(route.snapshot.params['id']);
  }

  private loadLevel(id: string): void {
    this.currentLevel = this.levelService.get(id);
  }

  protected update(id: string): void {
    const modeToUpdate = this.modalities.find(mode => mode.id === id);
    if (modeToUpdate) {
      this.currentMode = modeToUpdate;
      this.form.setValue({
        name: modeToUpdate.name,
        common: modeToUpdate.common,
        specific: modeToUpdate.specific,
        elective: modeToUpdate.elective,
        electiveOne: modeToUpdate.electiveOne
      });
      this.status = Status.Update;
      this.input()?.nativeElement.focus();
    }
  }

  protected remove(id: string): void {
    const levelToRemove = this.modalities.find(mode => mode.id === id);
    if (levelToRemove) {
      this.levelService.remove(levelToRemove);
      this.modalities = this.modalities.filter(level => level.id !== id);
      this.currentMode=undefined;
      this.resetForm();
    }
  }

  protected submit(): void {
    const { name, common, specific, elective, electiveOne } = this.form.value as Mode;
    if (!name) return;

    if (this.status === Status.Add) {
      this.currentMode = this.modalitiesService.add(
        {
          name, common, specific, elective, electiveOne
        } as Mode,
        this.currentMode?.id);
      this.modalities.push(this.currentMode)
    } else if (
      this.status === Status.Update &&
      this.currentMode &&
      this.currentLevel
    ) {
      const updatedLevel = {
        id: this.currentLevel.id,
        name,
        levelId: this.currentMode?.id,
        common,
        specific,
        elective,
        electiveOne
      };

      const index = this.modalities.indexOf(this.currentMode);
      this.modalities[index] = updatedLevel;
      this.modalitiesService.update(updatedLevel);


    }

    this.resetForm();
  }

  protected resetForm(): void {
    this.form.reset();
    this.status = Status.Add;
    this.input()?.nativeElement.focus();
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
}
