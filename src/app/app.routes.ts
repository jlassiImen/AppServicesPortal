import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MeteoComponent } from './meteo/meteo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServicePortalComponent } from './service-portal/service-portal.component';
import { RestaurationComponent } from './restauration/restauration.component';
import { TransportComponent } from './transport/transport.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meteo', component: MeteoComponent ,canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'servicePortal', component: ServicePortalComponent  },
  { path: 'restauration', component: RestaurationComponent  },
  { path: 'transport', component: TransportComponent  },
  { path: 'RestaurantDetails', component: RestaurantDetailsComponent  },
  { path: '**', redirectTo: '' }


];
