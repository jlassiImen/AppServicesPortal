import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportDetailsComponent } from './transport-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TransportDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class TransportDetailsRoutingModule { }