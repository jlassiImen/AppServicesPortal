import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { OwlModule } from 'ngx-owl-carousel'
import { SimpleLoginService } from './services/auth/simple-login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyHttpInterceptor } from './interceptors/MyHttpInterceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader/loader-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForgotPasswordComponent,
    CallbackComponent,
    ConfirmationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OwlModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  },
  AuthService, SimpleLoginService, AuthGuardService,LoaderService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
