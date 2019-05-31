import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MeteoComponent } from './meteo/meteo.component';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
