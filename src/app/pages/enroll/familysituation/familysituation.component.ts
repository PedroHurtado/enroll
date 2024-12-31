import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { } from '../../../components/logo/logo.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { ContainerComponent } from '../../../components/container/container.component';
@Component({
  selector: 'app-familysituation',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    TextFieldModule,
    RouterLink,
    MatButtonModule,
    HeaderComponent,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './familysituation.component.html',
  styleUrl: './familysituation.component.css'
})
export class FamilysituationComponent {
  identity:string='student';
  situation:string='married' ;
  custody:string="mother"
  form=new FormGroup({

  })
  constructor(private router:Router) { }
  handlerClick(){
   this.router.navigate(['enrolls/steppers']);
  }
}
