import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsComponent } from './museums.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MuseumsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class MuseumsRoutingModule { }
