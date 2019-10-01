import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { MuseumsDetailsRoutingModule } from './museums-details-routing.module';
import { MuseumsDetailsComponent } from './museums-details.component';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { MuseumsService } from './../services/museums/museums.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import {CoreModule} from '../core.module'

@NgModule({
  declarations: [
    MuseumsDetailsComponent
  ],
  imports: [
    CommonModule,
    MuseumsDetailsRoutingModule,
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
    MuseumsService, MeteoService
  ]
})
export class MuseumsDetailsModule { }