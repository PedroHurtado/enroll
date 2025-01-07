import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { LevelDomain } from '../../domain/levels';
import { LevelService } from './level.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from './status';
import { RouterLink } from '@angular/router';

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
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelsComponent {
  protected form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  protected levels: LevelDomain[] = [];
  protected currentLevel?: LevelDomain;
  protected status: Status = Status.Add;
  protected input= viewChild<ElementRef>('input');

  constructor(private readonly levelService: LevelService) {
    this.loadLevels();
  }

  private loadLevels(): void {
    this.levels = this.levelService.getAll();
  }

  protected update(id: string): void {
    const levelToUpdate = this.levelService.get(id)
    if (levelToUpdate) {
      this.currentLevel = levelToUpdate;
      this.form.setValue({ name: levelToUpdate.name });
      this.status = Status.Update;
      this.input()?.nativeElement.focus();
    }
  }

  protected remove(id: string): void {
    const levelToRemove = this.levelService.get(id)
    if (levelToRemove) {
      this.levels = this.levelService.remove(levelToRemove)
      this.resetForm();
    }
  }

  protected submit(): void {
    const { name } = this.form.value;
    if (!name) return;
    if (this.status === Status.Add) {
      this.levelService.add(name);
    } else if (this.status === Status.Update && this.currentLevel) {
      this.currentLevel.update(name)
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
