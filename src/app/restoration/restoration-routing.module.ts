import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorationComponent } from './restoration.component';


const routes: Routes = [
  { path: '', component: RestorationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestorationRoutingModule { }
