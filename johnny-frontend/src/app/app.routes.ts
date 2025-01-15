import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'robotdetails',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./details/details.component').then((m) => m.DetailsComponent);
    }
  }

];
