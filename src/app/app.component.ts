import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FileuploadComponent } from './components/fileupload/fileupload.component';





@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FileuploadComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
