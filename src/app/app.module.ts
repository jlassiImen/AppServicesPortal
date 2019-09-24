import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { OwlModule } from 'ngx-owl-carousel'
import { SimpleLoginService } from './services/auth/simple-login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyHttpInterceptor } from './interceptors/MyHttpInterceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader/loader-service.service';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {CoreModule} from './core.module'
import { core } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
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
    AppRoutingModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate : false
  }),
  CoreModule.forRoot()
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
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}