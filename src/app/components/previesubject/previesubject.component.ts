import { Component, input } from '@angular/core';
import { Config } from './config';
import { SelectedlistComponent } from '../selectedlist/selectedlist.component';
import { SortedlistComponent } from '../sortedlist/sortedlist.component';
import { ItemsService } from './items.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-previesubject',
  imports: [
    SelectedlistComponent,
    SortedlistComponent,
    MatListModule
  ],
  templateUrl: './previesubject.component.html',
  styleUrl: './previesubject.component.css'
})
export class PreviesubjectComponent {
  config=input.required<Config>()
  protected items:any[];
  constructor(service:ItemsService){
    this.items = service.items;
  }
}
