import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { HotelDetailsComponent } from './hotel-details.component';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { HotelsService } from './../services/hotels/hotels.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';

@NgModule({
  declarations: [
    HotelDetailsComponent
  ],
  imports: [
    CommonModule,
    HotelDetailsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpModule,
    OwlModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    HotelsService, MeteoService
  ]
})
export class HotelDetailsModule { }



