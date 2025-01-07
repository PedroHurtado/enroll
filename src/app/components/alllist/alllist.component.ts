import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-alllist',
  imports: [MatListModule],
  templateUrl: './alllist.component.html',
  styleUrl: './alllist.component.css'
})
export class AlllistComponent {
  text = input.required<string>()
  items=input.required<any[]>()
}
