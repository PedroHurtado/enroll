import { Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { Level } from './level';
import { LevelService } from './level.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from './status';

@Component({
  selector: 'app-levels',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HeaderComponent,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent {
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  protected levels: Level[] = [];
  protected currentLevel?: Level;
  protected status: Status = Status.Add;
  protected input= viewChild<ElementRef>('input');

  constructor(private readonly levelService: LevelService) {
    this.loadLevels();
  }

  private loadLevels(): void {
    this.levels = this.levelService.getAll();
  }

  protected update(id: string): void {
    const levelToUpdate = this.levels.find(level => level.id === id);
    if (levelToUpdate) {
      this.currentLevel = levelToUpdate;
      this.form.setValue({ name: levelToUpdate.name });
      this.status = Status.Update;
      this.input()?.nativeElement.focus();
    }
  }

  protected remove(id: string): void {
    const levelToRemove = this.levels.find(level => level.id === id);
    if (levelToRemove) {
      this.levelService.remove(levelToRemove);
      this.levels = this.levels.filter(level => level.id !== id);
      this.resetForm();
    }
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) return;

    if (this.status === Status.Add) {
      this.levels.push(this.levelService.add(name));
    } else if (this.status === Status.Update && this.currentLevel) {
      const updatedLevel = { id: this.currentLevel.id, name };
      const index = this.levels.indexOf(this.currentLevel);
      this.levels[index] = updatedLevel;
      this.levelService.update(updatedLevel);
    }

    this.resetForm();
  }

  protected resetForm(): void {
    this.form.reset();
    this.currentLevel = undefined;
    this.status = Status.Add;
    this.input()?.nativeElement.focus();
  }
}
