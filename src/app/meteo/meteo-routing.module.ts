import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteoComponent } from './meteo.component';

const routes: Routes = [
  { path: '', component: MeteoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
