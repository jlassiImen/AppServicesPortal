import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { CinemasComponent } from './cinemas.component';
import { MeteoService } from '../services/meteoServices/meteo.service';
import { CinemasService } from '../services/cinemas/cinemas.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import {CoreModule} from '../core.module'

@NgModule({
  declarations: [
    CinemasComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
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
    CinemasService, MeteoService
  ]
})
export class CinemasModule { }



