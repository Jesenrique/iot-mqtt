import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mediciones/:id',
    loadComponent: () => import('./paginas/mediciones/mediciones/mediciones.page').then( m => m.MedicionesPage)
  },
  {
    path: 'logs/:id',
    loadComponent: () => import('./paginas/logs/logs.page').then( m => m.LogsPage)
  },




];
