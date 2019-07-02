import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class LoginModule { }



