import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SelectedlistComponent } from './components/selectedlist/selectedlist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SelectedlistComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  form= new FormGroup({
    selectedItems: new FormControl([]),
  });
  submit(){
    console.log(this.form.value);
  }
}
