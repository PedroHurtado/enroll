import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPublicacion, Level } from '../publication';
import { selectedlistValidator } from '../../../../components/selectedlist/selectedlistvalidator';

@Component({
  selector: 'app-add',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  protected form = new FormGroup({
    name: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
    start: new FormControl<Date>(new Date(Date.now()), {nonNullable:true, validators:[Validators.required]}),
    end: new FormControl<Date>(new Date(Date.now()), {nonNullable:true, validators:[Validators.required]}),
    levels: new FormControl<Level[]>([], {nonNullable:true, validators:[selectedlistValidator(1)]})
  })
  submit() {
    const { name, start, end, levels } = this.form.getRawValue()
    const publication = createPublicacion({
      name,
      start,
      end,
      levels
    })

  }
}
