import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationDetailsComponent } from './education-details.component';

const routes: Routes = [
  { path: '', component: EducationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationDetailsRoutingModule { }
