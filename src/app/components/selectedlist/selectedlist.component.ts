import { Component, input } from '@angular/core';
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
  items=input.required<any[]>();
  text=input.required<string>();
  default=input<any>();
  multiple=input<boolean>(true);
  disabled = false;
  load=false;
  selected: any[] = [];
  onChange: (value: any[]) => void = () => {};
  onTouched: () => void = () => {};
  constructor() { }
  writeValue(ob: any[]): void {
    if(this.default()) {
      this.selected = (ob || []).filter(item => item === this.default());
    }
    else{
      this.selected = ob || [];
    }

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
    this.selected = result;
    this.onChange(this.selected);
    this.onTouched();
  }
  isSelected(item: any) {
    if(this.default() === item && !this.load) {
      this.load = true;
      this.selected = [item];
      this.onChange(this.selected);
      this.onTouched();
      return true;
    }
    return false;
  }
}
