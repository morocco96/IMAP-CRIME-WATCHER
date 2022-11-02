import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintDetailsComponent } from './complaint-details.component';

const routes: Routes = [
  {
    path:'',
    component: ComplaintDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintDetailsRoutingModule { }
