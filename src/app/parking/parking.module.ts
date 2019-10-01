import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingComponent } from './parking.component';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { ParkingService } from './../services/parking/parking.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import {CoreModule} from '../core.module'


@NgModule({
  declarations: [
    ParkingComponent
  ],
  imports: [
    CommonModule,
    ParkingRoutingModule,
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
export class ParkingModule { }



