import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalsComponent } from './festivals.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FestivalsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class FestivalsRoutingModule { }
