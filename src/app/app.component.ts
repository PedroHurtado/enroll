import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Layout1Component } from './components/layout1/layout1.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

}
