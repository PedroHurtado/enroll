import { Component, provideExperimentalCheckNoChangesForDebug } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule } from '@angular/forms';
import { publish } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  imports: [
    HeaderComponent,
    ContainerComponent,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  protected form=new FormGroup(
    {
      information: new FormControl(true),
      publish: new FormControl(true),
      exit: new FormControl(true),
      legal: new FormControl(false),
      truthful: new FormControl(false),
      oficial: new FormControl(false),
    }
  );
  constructor(private router:Router) { }
  submit(){
    console.log(this.form.value);
    this.router.navigate(['/enrolls']);
  }
}
