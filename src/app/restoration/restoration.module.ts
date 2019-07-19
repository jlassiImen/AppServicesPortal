import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RestorationRoutingModule } from './restoration-routing.module';
import { RestorationComponent } from './restoration.component';

@NgModule({
  declarations: [
    RestorationComponent
  ],
  imports: [
    CommonModule,
    RestorationRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpModule
  ]
})
export class RestorationModule { }



