import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import { SimpleLoginService } from './../services/auth/simple-login.service';

import { MeteoRoutingModule } from './meteo-routing.module';

import { MeteoComponent } from './meteo.component';




@NgModule({
  declarations: [
    MeteoComponent
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    SimpleLoginService
  ]
})
export class MeteoModule { }



