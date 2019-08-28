import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confirmation', loadChildren: './confirmation/confirmation.module#ConfirmationModule' },
  { path: 'meteo', loadChildren: './meteo/meteo.module#MeteoModule', canActivate: [AuthGuardService] },
  { path: 'forgotPassword', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'resetPassword', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'  },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'callback', component: CallbackComponent },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule'},
  { path: 'restoration', loadChildren: './restoration/restoration.module#RestorationModule'},
  { path: 'transport', loadChildren: './transport/transport.module#TransportModule' },
  { path: 'restaurantDetails', loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilModule', canActivate: [AuthGuardService] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
