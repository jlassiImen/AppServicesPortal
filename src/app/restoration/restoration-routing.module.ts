import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorationComponent } from './restoration.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RestorationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class RestorationRoutingModule { }
