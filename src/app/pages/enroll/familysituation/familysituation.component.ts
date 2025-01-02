import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';

@Component({
  selector: 'app-familysituation',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    TextFieldModule,
    RouterLink,
    MatButtonModule,
    HeaderComponent,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './familysituation.component.html',
  styleUrls: ['./familysituation.component.css']
})
export class FamilysituationComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {
    this.form = this.initializeForm();
  }

  ngOnInit(): void {
    this.setupValueChangeHandlers();
  }

  initializeForm(): FormGroup {
    return new FormGroup({
      identity: new FormControl('student'),
      situation: new FormControl(null),
      custody: new FormControl(null),
      student: new FormGroup({
        email: new FormControl(null),
        phone: new FormControl(null),
      }),
      mother: new FormGroup({
        email: new FormControl(null),
        phone: new FormControl(null),
      }),
      father: new FormGroup({
        email: new FormControl(null),
        phone: new FormControl(null),
      }),
      guardian: new FormGroup({
        email: new FormControl(null),
        phone: new FormControl(null),
      }),
    });
  }

  setupValueChangeHandlers(): void {
    this.form.get('identity')?.valueChanges.subscribe(this.processIdentityChange.bind(this));
    this.form.get('situation')?.valueChanges.subscribe(this.processSituationChange.bind(this));
  }

  submit(): void {
    console.log(this.form.value);
    this.router.navigate(['/enrolls/steppers']);
  }

  identity(): string {
    return this.form.get('identity')?.value || '';
  }

  situation(): string {
    return this.form.get('situation')?.value || '';
  }

  custody(): string {
    return this.form.get('custody')?.value || '';
  }

  private processSituationChange(value: string | null): void {
    if (value === 'divorced') {
      this.form.patchValue({ custody: 'mother' });
    }

    const identity = this.form.get('identity')?.value;
    if ((identity === 'mother' || identity === 'father') && (value === 'single' || value === 'widowed')) {
      const resetField = identity === 'mother' ? 'father' : 'mother';
      this.form.patchValue({
        guardian: { email: null, phone: null },
        [resetField]: { email: null, phone: null }
      });
    }
  }

  private processIdentityChange(value: string | null): void {
    switch (value) {
      case 'student':
        this.form.patchValue({
          situation: null,
          custody: null,
          mother: { email: null, phone: null },
          father: { email: null, phone: null },
          guardian: { email: null, phone: null }
        });
        break;
      case 'mother':
        if (this.form.get('situation')?.value === 'single' || this.form.get('situation')?.value === 'widowed') {
          this.form.patchValue({
            guardian: { email: null, phone: null },
            father: { email: null, phone: null }
          });
        } else {
          this.form.patchValue({
            situation: 'married',
            guardian: { email: null, phone: null }
          });
        }
        break;
      case 'father':
        if (this.form.get('situation')?.value === 'single' || this.form.get('situation')?.value === 'widowed') {
          this.form.patchValue({
            guardian: { email: null, phone: null },
            mother: { email: null, phone: null }
          });
        } else {
          this.form.patchValue({
            situation: 'married',
            guardian: { email: null, phone: null }
          });
        }
        break;
      default:
        this.form.patchValue({
          situation: null,
          custody: null,
          mother: { email: null, phone: null },
          father: { email: null, phone: null }
        });
        break;
    }
  }
}
