import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedComplaintDetailComponent } from './closed-complaint-detail.component';

const routes: Routes = [
  {
    path:'',
    component: ClosedComplaintDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedComplaintDetailRoutingModule { }
