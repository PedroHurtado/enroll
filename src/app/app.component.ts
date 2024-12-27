import { Component } from '@angular/core';
import { LoginpageComponent } from './pages/login/loginpage.component';


@Component({
  selector: 'app-root',
  imports: [
    LoginpageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
