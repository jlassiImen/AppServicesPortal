import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import { SimpleLoginService } from './../services/auth/simple-login.service';

import { ProfilRoutingModule } from './profil-routing.module';

import { ProfilComponent } from './profil.component';
import {CoreModule} from '../core.module'



@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule
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
export class ProfilModule { }



