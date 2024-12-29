import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';

export const routes: Routes = [
  {path: 'login', component: LoginpageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];
