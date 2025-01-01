import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
@Component({
  selector: 'app-selectedlist',
  imports: [MatListModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectedlistComponent,
      multi: true
    }
  ],
  templateUrl: './selectedlist.component.html',
  styleUrl: './selectedlist.component.css'
})
export class SelectedlistComponent implements ControlValueAccessor {
  selectedItems: any[] = ['item1', 'item2', 'item3'];
  disabled = false;
  selected: any[] = [];
  onChange: (value: any[]) => void = () => {};
  onTouched: () => void = () => {};
  constructor() { }
  writeValue(ob: any[]): void {
    this.selected = ob || [];
  }
  registerOnChange(fn: any): void {
   this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onSelectionChange(select: MatSelectionListChange) {
    const result = select.source.selectedOptions.selected.map(item => item.value)
    this.onChange(result);
    this.onTouched();
  }
}
