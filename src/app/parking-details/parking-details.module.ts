import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ParkingDetailsRoutingModule } from './parking-details-routing.module';
import { ParkingDetailsComponent } from './parking-details.component';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { ParkingService } from './../services/parking/parking.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import {CoreModule} from '../core.module'

@NgModule({
  declarations: [
    ParkingDetailsComponent
  ],
  imports: [
    CommonModule,
    ParkingDetailsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
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
    ParkingService, MeteoService
  ]
})
export class ParkingDetailsModule { }