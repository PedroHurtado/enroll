import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SelectedlistComponent } from './components/selectedlist/selectedlist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectedlistValidator } from './components/selectedlist/selectedlistvalidator';
import { SortedlistComponent } from './components/sortedlist/sortedlist.component';






@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SortedlistComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  selectedItems =  [
    "Segunda Lengua Extranjera FRANCÉS I",
    "Segunda Lengua Extranjera ITALIANO I",
    "Cultura Audiovisual",
    "Lenguaje y Práctica Musical",
    "Tecnología e Ingeniería I",
    "Dibujo Técnico I",
    "Biología, Geología y Ciencias Ambientales",
    "Física y Química",
    "Economía",
    "Historia del Mundo Contemporáneo",
    "Dibujo Técnico Aplicado a las Artes Plásticas y al Diseño I"
  ]
  text = 'Ordene las asignaturas en order de preferencia, cursaras una';
  form= new FormGroup({
    selectedItems: new FormControl(this.selectedItems),
  });
  submit(){
    console.log(this.form.value.selectedItems);
  }
}
