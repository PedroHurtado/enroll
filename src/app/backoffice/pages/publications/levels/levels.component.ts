import { Component } from '@angular/core';
import { Level, SelectedDescriptor } from '../publication';
import { MatListModule } from '@angular/material/list';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LevelService } from '../../levels/level.service';

@Component({
  selector: 'app-levels',
  imports: [MatListModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LevelsComponent,
      multi: true
    }
  ],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent implements ControlValueAccessor {

  protected levels: Level[] = []
  private disabled: boolean = false

  private onChange: (value: any[]) => void = () => { };
  private onTouched: () => void = () => { };
  constructor(private levelService: LevelService) {
    this.levels = this.loadLevels()
  }
  private loadLevels(): Level[] {
    return this.levelService.getAll().map(l => {
      const level = {
        id: l.id,
        name: l.name,
        selected: true,
        courses: l.courses.map(({ id, name }) => {
          return {
            id, name, selected: true
          }
        })
      }
      return level
    })
  }
  protected selectedLevel(level: Level, selected: boolean) {
    if(level.selected!==selected){
      level.selected = selected
      level.courses.forEach(c => c.selected = selected)
      this.publish()
    }
  }
  protected selectedCourse(course: SelectedDescriptor, selected: boolean) {

      course.selected = selected
      this.publish()

  }
  isSelected(selectedDescriptor: SelectedDescriptor) {
    return selectedDescriptor.selected
  }
  writeValue(obj: Level[]): void {
    const notSelected = obj
      .flatMap(({ id, name, selected, courses }) => [{ id, name, selected }, ...courses])
      .filter(v => !v.selected)
      .map(v => v.id)
    this.levels.forEach(l => {
      if (notSelected.includes(l.id)) {
        l.selected = false
      }
      l.courses.forEach(c => {
        if (notSelected.includes(c.id)) {
          c.selected = false
        }
      })
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  private publish() {
    this.onChange(this.levels)
    this.onTouched()
  }
}
