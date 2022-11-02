import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedComplaintComponent } from './closed-complaint.component';

const routes: Routes = [
  {
    path:'',
    component: ClosedComplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedComplaintRoutingModule { }
