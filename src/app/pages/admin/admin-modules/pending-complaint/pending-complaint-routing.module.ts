import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingComplaintComponent } from './pending-complaint.component';

const routes: Routes = [
  {
    path: '',
    component: PendingComplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingComplaintRoutingModule { }
