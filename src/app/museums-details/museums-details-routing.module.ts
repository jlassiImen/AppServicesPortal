import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsDetailsComponent } from './museums-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MuseumsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class MuseumsDetailsRoutingModule { }