import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingComponent } from './parking.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ParkingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
