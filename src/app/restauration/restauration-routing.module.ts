import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurationComponent } from './restauration.component';

const routes: Routes = [
  { path: '', component: RestaurationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurationRoutingModule { }
