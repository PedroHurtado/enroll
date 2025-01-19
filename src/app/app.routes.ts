import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AutoguardService } from './autoguard.service';

export const routes: Routes = [

  {
    path: 'login',
    title: 'Login',
    component: LoginpageComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AutoguardService],
    children: [
      {
        path: 'enrolls',
        title: 'Matrículas',
        loadComponent: () => import('./pages/enroll/enroll/enroll.component').then(m => m.EnrollComponent)
      },
      {
        path: 'enrolls/add',
        title: 'Matrículas',
        loadComponent: () => import('./pages/courses/courses/courses.component').then(m => m.CoursesComponent)
      },
      {
        path: 'enrolls/info',
        title: 'Matrículas',
        loadComponent: () => import('./pages/enroll/info/info.component').then(m => m.InfoComponent)
      },
      {
        path: 'enrolls/situation',
        title: 'Matrículas',
        loadComponent: () => import('./pages/enroll/familysituation/familysituation.component').then(m => m.FamilysituationComponent)
      },
      {
        path: 'enrolls/steppers',
        title: 'Matrículas',
        loadComponent: () => import('./pages/enroll/steppers/steppers.component').then(m => m.SteppersComponent)
      },
      {
        path: 'enrolls/confirm',
        title: 'Matrículas',
        loadComponent: () => import('./pages/enroll/confirm/confirm.component').then(m => m.ConfirmComponent)
      },
      {
        path: 'levels',
        title: 'Niveles educativos',
        loadComponent: () => import('./backoffice/pages/levels/levels.component').then(m => m.LevelsComponent)
      },
      {
        path: 'courses/:id',
        title: 'Cursos',
        loadComponent: () => import('./backoffice/pages/courses/courses.component').then(m => m.CoursesComponent)
      },
      {
        path: 'modalities/:levelId/:id',
        title: 'Modalidades',
        loadComponent: () => import('./backoffice/pages/modalities/modalities.component').then(m => m.ModalitiesComponent)
      },
      //add subjects
      {
        path: 'subjects/add/:levelId/:courseId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
      },
      {
        path: 'subjects/add/:levelId/:courseId/:modeId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
      },
      //update
      {
        path: 'subjects/edit/:levelId/:courseId/:subjectId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
      },
      {
        path: 'subjects/edit/:levelId/:courseId/:modeId/:subjectId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/addsubjects/addsubjects.component').then(m => m.AddsubjectsComponent)
      },

      {
        path: 'subjects/:levelId/:courseId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/listsubjects/listsubjects.component').then(m => m.ListsubjectsComponent)
      },
      {
        path: 'subjects/:levelId/:courseId/:modeId',
        title: 'Asignaturas',
        loadComponent: () => import('./backoffice/pages/subjects/listsubjects/listsubjects.component').then(m => m.ListsubjectsComponent)
      },
      {
        path: 'publications',
        title: 'Publicaciones',
        loadComponent: () => import('./backoffice/pages/publications/list/list.component').then(c => c.ListComponent)
      },
      {
        path: 'publications/add',
        title: 'Publicaciones',
        loadComponent: () => import('./backoffice/pages/publications/add/add.component').then(c => c.AddComponent)
      },
      {
        path: 'publications/edit/:id',
        title: 'Publicaciones',
        loadComponent: () => import('./backoffice/pages/publications/edit/edit.component').then(c => c.EditComponent)
      },
      {
        path:'groups',
        title:"Grupos",
        loadComponent: ()=>import('./backoffice/pages/groups/groups.component').then(c=>c.GroupsComponent)

      },

      {
        path:'alumns/modality/:courseId/:modalityId',
        title:"Alumnos",
        loadComponent: ()=>import('./backoffice/pages/groups/components/group-alumns/group-alumns.component').then(c=>c.GroupAlumnsComponent)

      },

      {
        path:'alumns/modality/compulsory/:courseId/:modalityId/:subjectId',
        title:"Alumnos",
        loadComponent: ()=>import('./backoffice/pages/groups/components/group-alumns/group-alumns.component').then(c=>c.GroupAlumnsComponent)

      },

      {
        path:'alumns/modality/electives/:courseId/:modalityId/:subjectId',
        title:"Alumnos",
        loadComponent: ()=>import('./backoffice/pages/groups/components/group-alumns/group-alumns.component').then(c=>c.GroupAlumnsComponent)

      },

      {
        path:'alumns/electives/:courseId/:subjectId',
        title:"Alumnos",
        loadComponent: ()=>import('./backoffice/pages/groups/components/group-alumns/group-alumns.component').then(c=>c.GroupAlumnsComponent)

      }
    ]

  },
  {
    path: '**',
    redirectTo: 'login',
  },
];


