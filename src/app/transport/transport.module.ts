import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { TransportRoutingModule } from './transport-routing.module';

import { TransportComponent } from './transport.component';




@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class TransportModule { }



