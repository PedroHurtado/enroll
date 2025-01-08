import { Component, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { Descriptor } from '../../backoffice/domain/levels';
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
  items=input.required<Descriptor[]>();
  text=input.required<string>();
  default=input<Descriptor>();
  multiple=input<boolean>(true);
  designMode=input<boolean>(false)
  disabled = false;
  load=false;
  selected: Descriptor[] = [];
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
    if(this.designMode() && this.default() === item){
      return true
    }
    else if(this.default() === item && !this.load) {
      this.load = true;
      this.selected = [item];
      this.onChange(this.selected);
      this.onTouched();
      return true;
    }
    return false;
  }
}
