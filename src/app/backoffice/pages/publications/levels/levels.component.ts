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
  private disabled: boolean = false
  private onChange: (value: any[]) => void = () => { };
  private onTouched: () => void = () => { };

  protected selectedLevel(level: Level, selected: boolean) {
    if(selected){
      this.selected.push(this.cloneLevel(level))
    }
    else{
      this.selected=this.selected.filter(l=>l!==level)
    }
  }
  selectedCourse(level: Level, course: Descriptor, selected: boolean) {

  }
  getSelected(level: Level, course: Descriptor): boolean {
    return !this.selected.every(l=>l.id===level.id)
  }
  private cloneLevel(level:Level){
    return {
      id:level.id,
      name:level.name,
      courses:level.courses.map(({id,name})=>({id,name}))
    }

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
