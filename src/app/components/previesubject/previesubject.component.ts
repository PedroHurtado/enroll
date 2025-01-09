import { Component, input } from '@angular/core';
import { SelectedlistComponent } from '../selectedlist/selectedlist.component';
import { SortedlistComponent } from '../sortedlist/sortedlist.component';

import {MatListModule} from '@angular/material/list';
import { AlllistComponent } from '../alllist/alllist.component';
import { DefaultSubject, Descriptor, DescriptorDomain } from '../../backoffice/domain/levels';

@Component({
  selector: 'app-previesubject',
  imports: [
    SelectedlistComponent,
    SortedlistComponent,
    AlllistComponent,
    MatListModule
  ],
  templateUrl: './previesubject.component.html',
  styleUrl: './previesubject.component.css'
})
export class PreviesubjectComponent {
  config=input.required<DefaultSubject>()
  items=input<DescriptorDomain[]>([])
  //protected items:Descriptor[] = [];
  constructor(){
  }
}
