import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { InfoService } from './info.service';
import { Info } from './info';

@Component({
  selector: 'app-info',
  imports: [

    RouterLink,
    MatButtonModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  protected readonly info: Info[]
  constructor(private service:InfoService) {
    this.info = service.getAll();
  }

}
