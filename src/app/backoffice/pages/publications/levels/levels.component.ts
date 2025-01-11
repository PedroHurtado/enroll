import { Component, input } from '@angular/core';
import { Level } from '../publication';
import { MatListModule } from '@angular/material/list';
import { Descriptor } from '../../../domain/levels';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


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
  levels = input.required<Level[]>()
  private selected: Level[] = []
  private selectedCourses: Descriptor[] = []
  disabled: boolean = false
  onChange: (value: any[]) => void = () => { };
  onTouched: () => void = () => { };
  protected selectedLevel(level: Level, selected: boolean) {
    if (selected) {
      this.selected.push({ ...level })
    }
    else {
      this.selected = this.selected.filter(l => l != level)
    }
    this.onChange(this.selected)
    this.onTouched()
  }
  selectedCourse(level: Level, course: Descriptor, selected: boolean) {
    const currentLevel = this.selected.find(l => l.id === level.id) ||  {...level}
    if (selected) {
      this.selected.push(currentLevel)
      currentLevel.courses = [...currentLevel.courses.filter(c=>c.id === course.id)]
    }
    else {

    }
  }
  getSelected(level: Level, course: Descriptor): boolean {
    return this.selected.includes(level)
  }
  writeValue(obj: Level[]): void {
    this.selected = obj
    this.onChange(this.selected)
    this.onTouched()
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
}
