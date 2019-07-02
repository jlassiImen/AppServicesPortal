import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { RestaurationRoutingModule } from './restauration-routing.module';

import { RestaurationComponent } from './restauration.component';




@NgModule({
  declarations: [
    RestaurationComponent
  ],
  imports: [
    CommonModule,
    RestaurationRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class RestaurationModule { }



