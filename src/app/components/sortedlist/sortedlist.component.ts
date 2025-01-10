import { Component, computed, input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addFeature, Descriptor, ISubjectDomain } from '../../backoffice/domain/levels';
@Component({
  selector: 'app-sortedlist',
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SortedlistComponent,
      multi: true
    }
  ],
  templateUrl: './sortedlist.component.html',
  styleUrl: './sortedlist.component.css'
})
export class SortedlistComponent implements ControlValueAccessor {
  subjectDomain = input.required<ISubjectDomain>()
  disabled = false;
  selected: Descriptor[] = [];
  onChange: (value: any[]) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(obj: any): void {
    this.selected = (obj || []).slice(0, this.subjectDomain().limit);
    this.onChange(this.selected);
    this.onTouched();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.onChange(this.selected);
    this.onTouched();
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.subjectDomain().subjects, event.previousIndex, event.currentIndex);
    this.onChange(this.subjectDomain().subjects.slice(0, this.subjectDomain().limit));
    this.onTouched();
  }
  maxLimit(index: number) {
    return (index >= this.subjectDomain().limit);
  }
}
