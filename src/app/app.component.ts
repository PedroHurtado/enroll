import { Component } from '@angular/core';
//import { LoginpageComponent } from './pages/login/loginpage.component';
import { CoursesComponent } from './pages/SchoolEnrollments/courses/courses.component';


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
