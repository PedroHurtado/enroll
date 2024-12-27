import { Component } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { LoginComponent } from '../login/login.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-loginpage',
  imports: [
    LoginComponent,
    ConfirmComponent
  ],
  templateUrl: './loginpage.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class LoginpageComponent {
  session = '';
  text = '';

  handlerLogin(session: string) {
    this.session = session;
    this.text = session;
  }
}
