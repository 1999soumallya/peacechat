import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Sign In - PeaceChat',
    loadComponent: () => import('./signin/signin').then(m => m.Signin)
  },
  {
    path: 'dashboard',
    title: 'Dashboard - PeaceChat',
    loadComponent: () => import('./layout/dashboard/dashboard').then(m => m.Dashboard),
    children: [
      {
        path: 'users',
        title: 'Users - PeaceChat',
        loadComponent: () => import('./dashboard/home/home').then(m => m.Home)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
