import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FestivalsRoutingModule } from './festivals-routing.module';
import { FestivalsComponent } from './festivals.component';
import { MeteoService } from '../services/meteoServices/meteo.service';
import { FestivalsService } from '../services/festivals/festivals.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import {CoreModule} from '../core.module'

@NgModule({
  declarations: [
    FestivalsComponent
  ],
  imports: [
    CommonModule,
    FestivalsRoutingModule,
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
    FestivalsService, MeteoService
  ]
})
export class FestivalsModule { }



