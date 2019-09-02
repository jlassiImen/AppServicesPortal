import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDetailsComponent } from './hotel-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HotelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class HotelDetailsRoutingModule { }
