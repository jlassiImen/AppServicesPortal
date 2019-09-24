import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel'

import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import { RestaurantDetailsRoutingModule } from './restaurant-details-routing.module';
import { RestorationService } from './../services/restoration/restoration.service';
import { RestaurantDetailsComponent } from './restaurant-details.component';
import {CoreModule} from '../core.module'

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
    OwlModule,
    CoreModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    RestorationService
  ]
})
export class RestaurantDetailsModule { }



