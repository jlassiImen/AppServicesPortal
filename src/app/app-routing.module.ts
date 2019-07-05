import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'meteo', loadChildren: './meteo/meteo.module#MeteoModule', canActivate: [AuthGuardService] },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ForgotPasswordComponent },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'callback', component: CallbackComponent },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule', canActivate: [AuthGuardService] },
  { path: 'restauration', loadChildren: './restauration/restauration.module#RestaurationModule', canActivate: [AuthGuardService]},
  { path: 'transport', loadChildren: './transport/transport.module#TransportModule', canActivate: [AuthGuardService] },
  { path: 'RestaurantDetails', loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilModule', canActivate: [AuthGuardService] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
