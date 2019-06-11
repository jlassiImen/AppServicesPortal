import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { MeteoComponent } from './meteo/meteo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { OwlModule } from 'ngx-owl-carousel'
import { SimpleLoginService } from './services/auth/simple-login.service';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MeteoComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    OwlModule
  ],
  providers: [AuthService,SimpleLoginService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
