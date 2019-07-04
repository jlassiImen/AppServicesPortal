import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoriesComponent } from './categories.component';
import {CategoriesService} from './../services/categories/categories.service'
import {FilterPipe} from './categoriesFilter.pipe';


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
    HttpModule
  ],
  providers:[CategoriesService],
  exports:[FilterPipe]
})
export class CategoriesModule { }



