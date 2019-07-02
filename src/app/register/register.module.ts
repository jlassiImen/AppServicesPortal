import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';




@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class RegisterModule { }



