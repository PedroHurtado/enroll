import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-familysituation',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    CdkTextareaAutosize,
    TextFieldModule,
    RouterLink,
    MatButtonModule

  ],
  templateUrl: './familysituation.component.html',
  styleUrl: './familysituation.component.css'
})
export class FamilysituationComponent {
  identity:string='student';
  situation:string='single' ;
  constructor(private router:Router) { }
  handlerClick(){
   this.router.navigate(['enrolls/steppers']);
  }
}
