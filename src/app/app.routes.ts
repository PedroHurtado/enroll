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
  {
    path: 'enrolls/confirm',
    loadComponent: () => import('./pages/enroll/confirm/confirm.component').then(m => m.ConfirmComponent)
  },
  {
    path: 'levels',
    loadComponent: () => import('./backoffice/pages/levels/levels.component').then(m => m.LevelsComponent)
  },
  {
    path: 'modalities/:id',
    loadComponent: () => import('./backoffice/pages/modalities/modalities.component').then(m => m.ModalitiesComponent)
  },
  {
    path: 'common/:id',
    loadComponent: () => import('./backoffice/pages/subjects/common/common.component').then(m => m.CommonComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
