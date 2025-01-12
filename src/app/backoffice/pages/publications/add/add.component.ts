import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPublicacion, Level } from '../publication';
import { selectedlistValidator } from '../../../../components/selectedlist/selectedlistvalidator';
import { PublicationService } from '../publication.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Location } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LevelsComponent } from '../levels/levels.component';
@Component({
  selector: 'app-add',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    LevelsComponent
  ],
  providers:[
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddComponent {

  protected form = new FormGroup({
    name: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
    start: new FormControl<Date>(new Date(Date.now()), {nonNullable:true, validators:[Validators.required]}),
    end: new FormControl<Date>(new Date(Date.now()), {nonNullable:true, validators:[Validators.required]}),
    levels: new FormControl<Level[]>([], {nonNullable:true, validators:[selectedlistValidator(1)]})
  })
  protected input = viewChild<ElementRef>('input');
  protected levels:Level[] = []
  constructor(
    private service:PublicationService,
    private location:Location

  ){

  }

  submit() {
    const { name, start, end, levels } = this.form.getRawValue()
    const publication = createPublicacion({
      name,
      start,
      end,
      levels
    })
    this.service.add(publication)
    this.location.back()
  }
  ngAfterViewInit(): void {
    this.input()?.nativeElement.focus();

  }
}
