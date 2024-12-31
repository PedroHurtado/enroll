import { Component, output } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { getLoginOrPhone } from '../getloginorphone';
import { LogominiComponent } from '../../../components/logomini/logomini.component';
@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    LogominiComponent

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onLogin = output<string>();
  loginForm = new FormGroup({
    user: new FormControl(''),
  });
  handlerSubmit(ev:Event){
    const {user} = this.loginForm.value
    this.onLogin.emit(
      getLoginOrPhone(user as string)
    )
  }
}
