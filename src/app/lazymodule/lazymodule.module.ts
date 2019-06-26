import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { RouterModule } from '@angular/router';

import { CallbackComponent } from '../callback/callback.component';
import { MeteoComponent } from '../meteo/meteo.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

import { OwlModule } from 'ngx-owl-carousel'
import { SimpleLoginService } from '../services/auth/simple-login.service';


import { AuthGuardService } from '../services/auth/auth-guard.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ServicePortalComponent } from '../service-portal/service-portal.component';
import { RestaurationComponent } from '../restauration/restauration.component';
import { TransportComponent } from '../transport/transport.component';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';
import { ProfilComponent } from '../profil/profil.component';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  { path: 'meteo', component: MeteoComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'servicePortal', component: ServicePortalComponent },
  { path: 'restauration', component: RestaurationComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'RestaurantDetails', component: RestaurantDetailsComponent },
  { path: 'profil', component: ProfilComponent }

];

@NgModule({
  declarations: [
    MeteoComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    CallbackComponent,
    ServicePortalComponent,
    RestaurationComponent,
    TransportComponent,
    RestaurantDetailsComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OwlModule,
    RouterModule.forChild(ROUTES)
  ]

})
export class LazymoduleModule {

 }
