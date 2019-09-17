import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CinemasComponent } from './cinemas.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CinemasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class CinemasRoutingModule { }
