import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MeteoService } from '../services/meteoServices/meteo.service';
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';

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
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    MeteoService
  ]
})
export class TransportModule { }



