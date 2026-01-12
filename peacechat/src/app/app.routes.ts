import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Sign In - PeaceChat',
    loadComponent: () => import('./pages/auth/signin/signin').then(m => m.Signin)
  },
  {
    path: 'dashboard',
    title: 'Dashboard - PeaceChat',
    loadComponent: () => import('./layout/dashboard/dashboard').then(m => m.Dashboard),
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            title: 'Users - PeaceChat',
            loadComponent: () => import('./pages/dashboard/users/listing/users').then(m => m.Users)
          },
          {
            path: ':id',
            title: 'User Details - PeaceChat',
            loadComponent: () => import('./pages/dashboard/users/details/details').then(m => m.Details)
          }
        ]
      },
      {
        path: 'listeners',
        children: [
          {
            path: '',
            title: 'Listeners - PeaceChat',
            loadComponent: () => import('./pages/dashboard/listeners/listeners').then(m => m.Listeners)
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'users'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
