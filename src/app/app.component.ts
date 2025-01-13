import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
//import { RouterOutlet } from '@angular/router';
//import { ToolbarComponent } from './components/toolbar/toolbar.component';
//import { Layout1Component } from './components/layout1/layout1.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent
    //RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

}
