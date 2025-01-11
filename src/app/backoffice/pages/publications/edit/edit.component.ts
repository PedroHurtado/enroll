import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublicationService } from '../publication.service';
import { Level, Publication } from '../publication';
import { ActivatedRoute } from '@angular/router';
import { selectedlistValidator } from '../../../../components/selectedlist/selectedlistvalidator';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  private publication?: Publication
  protected form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    start: new FormControl<Date>(new Date(Date.now()), { nonNullable: true, validators: [Validators.required] }),
    end: new FormControl<Date>(new Date(Date.now()), { nonNullable: true, validators: [Validators.required] }),
    levels: new FormControl<Level[]>([], { nonNullable: true, validators: [selectedlistValidator(1)] })
  })
  constructor(
    private service: PublicationService,
    private route: ActivatedRoute

  ) {
    const { id } = this.route.snapshot.params
    this.publication = this.service.get(id)
    if (this.publication) {
      const { name, start, end, levels } = this.publication
      this.form.setValue({
        name, start, end, levels
      })
    }
  }
  submit() {
    const { name, start, end, levels } = this.form.getRawValue()
    if(this.publication){
      this.service.update({
        id:this.publication.id,
        name,
        start,
        end,
        levels
      })
    }

  }
}
