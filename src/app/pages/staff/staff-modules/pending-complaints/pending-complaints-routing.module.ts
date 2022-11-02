import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingComplaintsComponent } from './pending-complaints.component';

const routes: Routes = [
  {
    path: '',
    component : PendingComplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingComplaintsRoutingModule { }
