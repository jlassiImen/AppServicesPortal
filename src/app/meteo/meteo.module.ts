import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



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
  ]
})
export class MeteoModule { }



