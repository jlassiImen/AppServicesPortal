import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingDetailsComponent } from './parking-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ParkingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class ParkingDetailsRoutingModule { }