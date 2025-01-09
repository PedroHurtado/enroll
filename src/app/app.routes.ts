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
    path: 'courses/:id',
    loadComponent: () => import('./backoffice/pages/courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'modalities/:levelId/:id',
    loadComponent: () => import('./backoffice/pages/modalities/modalities.component').then(m => m.ModalitiesComponent)
  },
  {
    path: 'subjects/:levelId/:courseId/add',
    loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
  },
  {
    path: 'subjects/:levelId/:courseId/:modeId/add',
    loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
  },
  {
    path: 'subjects/:levelId/:courseId',
    loadComponent: () => import('./backoffice/pages/subjects/listsubjects/listsubjects.component').then(m => m.ListsubjectsComponent)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
