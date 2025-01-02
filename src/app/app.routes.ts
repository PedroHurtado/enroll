import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';

export const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  {
    path: 'enrolls',
    loadComponent: () => import('./pages/enroll/enroll/enroll.component').then(m => m.EnrollComponent)
  },
  {
    path: 'enrolls/add',
    loadComponent: () => import('./pages/courses/courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'enrolls/info',
    loadComponent: () => import('./pages/enroll/info/info.component').then(m => m.InfoComponent)
  },
  {
    path: 'enrolls/situation',
    loadComponent: () => import('./pages/enroll/familysituation/familysituation.component').then(m => m.FamilysituationComponent)
  },
  {
    path: 'enrolls/steppers',
    loadComponent: () => import('./pages/enroll/steppers/steppers.component').then(m => m.SteppersComponent)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
