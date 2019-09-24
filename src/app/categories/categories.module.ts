import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';

import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoriesComponent } from './categories.component';
import {CategoriesService} from './../services/categories/categories.service'
import {FilterPipe} from './categoriesFilter.pipe';
import {CoreModule} from '../core.module'


@NgModule({
  declarations: [
    CategoriesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    CategoriesService
  ],
  exports:[FilterPipe]
})
export class CategoriesModule { }



