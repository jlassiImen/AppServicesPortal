import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel'

import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';
import { EducationDetailsRoutingModule } from './education-details-routing.module';
import { EducationService } from './../services/education/education.service';
import { EducationDetailsComponent } from './education-details.component';
import {CoreModule} from '../core.module'

@NgModule({
  declarations: [
    EducationDetailsComponent
  ],
  imports: [
    CommonModule,
    EducationDetailsRoutingModule,
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
    EducationService
  ]
})
export class EducationDetailsModule { }