import { Component, input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-sortedlist',
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder],
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
  items = input.required<any[]>();
  text = input.required<string>();
  disabled = false;
  selected: any[] = [];
  onChange: (value: any[]) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(obj: any): void {
    this.selected = obj||[];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items(), event.previousIndex, event.currentIndex);
    this.onChange(this.items());
    this.onTouched();
  }
}
