import { ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LogominiComponent } from '../../../components/logomini/logomini.component';
@Component({
  selector: 'app-confirm',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    LogominiComponent

  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {
  input = viewChild<ElementRef>('input')
  text = input.required<string>();
  loginForm = new FormGroup({
    oneTime: new FormControl(''),
  });
  constructor(private router:Router) { }
  handlerSubmit() {
    this.router.navigate(['/enrolls']);
  }
  ngAfterViewInit(){
    this.input()?.nativeElement.focus();
  }
}
