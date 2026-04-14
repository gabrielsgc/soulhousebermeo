import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Soul House Bermeo | Alquiler Vacacional en el País Vasco',
  },
  { path: '**', redirectTo: '' },
];
