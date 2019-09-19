import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CinemaDetailsComponent } from './cinema-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CinemaDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class CinemaDetailsRoutingModule { }
