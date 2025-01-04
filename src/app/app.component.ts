import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubjectconfigComponent } from './components/subjectconfig/subjectconfig.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SubjectconfigComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

}
