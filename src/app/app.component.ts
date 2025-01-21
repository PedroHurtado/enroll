import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { DropComponent } from './test/drop/drop.component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    //DropComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';

}
