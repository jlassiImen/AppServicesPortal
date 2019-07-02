import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



import { ProfilRoutingModule } from './profil-routing.module';

import { ProfilComponent } from './profil.component';




@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class ProfilModule { }



