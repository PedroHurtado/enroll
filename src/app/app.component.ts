import { Component } from '@angular/core';
import { CoursesComponent } from './pages/courses/courses/courses.component';




@Component({
  selector: 'app-root',
  imports: [
    CoursesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
