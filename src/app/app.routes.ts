import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MeteoComponent } from './meteo/meteo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meteo', component: MeteoComponent ,canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
