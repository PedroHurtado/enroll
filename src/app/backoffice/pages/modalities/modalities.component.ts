import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
    name: new FormControl('', Validators.required)
  });
  protected modalities: Mode[] = [];
  protected currentLevel?: Level;
  protected currentMode?: Mode;
  protected status: Status = Status.Add;
  protected input = viewChild<ElementRef>('input');

  constructor(
      private route: ActivatedRoute,
      private readonly levelService: LevelService,
      private readonly modalitiesService: ModalitiesService
    ) {
    this.loadLevel(route.snapshot.params['id']);
  }

  private loadLevel(id:string): void {
    this.currentLevel = this.levelService.get(id);
  }

  protected update(id: string): void {
    const modeToUpdate = this.modalities.find(mode => mode.id === id);
    if (modeToUpdate) {
      this.currentMode = modeToUpdate;
      this.form.setValue({ name: modeToUpdate.name });
      this.status = Status.Update;
      this.input()?.nativeElement.focus();
    }
  }

  protected remove(id: string): void {
    const levelToRemove = this.modalities.find(mode => mode.id === id);
    if (levelToRemove) {
      this.levelService.remove(levelToRemove);
      this.modalities = this.modalities.filter(level => level.id !== id);
      this.resetForm();
    }
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) return;

    if (this.status === Status.Add) {
      this.modalities.push(this.modalitiesService.add(name, this.currentMode?.id));
    } else if (this.status === Status.Update && this.currentLevel) {
      const updatedLevel = {
        id: this.currentLevel.id,
        name ,
        levelId: this.currentMode?.id
      };
      const index = this.modalities.indexOf(this.currentLevel);
      this.modalities[index] = updatedLevel;
      this.modalitiesService.update(updatedLevel);
    }

    this.resetForm();
  }

  protected resetForm(): void {
    this.form.reset();
    this.currentLevel = undefined;
    this.status = Status.Add;
    this.input()?.nativeElement.focus();
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();
  }
}
