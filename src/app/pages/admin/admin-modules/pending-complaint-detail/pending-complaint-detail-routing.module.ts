import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingComplaintDetailComponent } from './pending-complaint-detail.component';

const routes: Routes = [
  {
    path:'',
    component:PendingComplaintDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingComplaintDetailRoutingModule { }
