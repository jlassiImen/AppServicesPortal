import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel'


import { RestaurantDetailsRoutingModule } from './restaurant-details-routing.module';

import { RestaurantDetailsComponent } from './restaurant-details.component';




@NgModule({
  declarations: [
    RestaurantDetailsComponent
  ],
  imports: [
    CommonModule,
    RestaurantDetailsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OwlModule
  ]
})
export class RestaurantDetailsModule { }



