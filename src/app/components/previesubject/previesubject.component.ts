import { Component, input } from '@angular/core';
import { Config } from './config';
import { SelectedlistComponent } from '../selectedlist/selectedlist.component';
import { SortedlistComponent } from '../sortedlist/sortedlist.component';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-previesubject',
  imports: [
    SelectedlistComponent,
    SortedlistComponent
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
