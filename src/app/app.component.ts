import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SelectedlistComponent } from './components/selectedlist/selectedlist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from './components/selectedlist/selectedlistvalidator';






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
  selectedItems = ['Fisica', 'Biologia', 'Historia'];
  text = 'Elija dos asignaturas';
  form= new FormGroup({
    selectedItems: new FormControl([],[selectedlistValidator(2)]),
  });
  submit(){
    console.log(this.form.value.selectedItems);
  }
}
