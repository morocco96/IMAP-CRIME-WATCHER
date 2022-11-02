import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplantHistoryComponent } from './complant-history.component';

const routes: Routes = [
  {
    path:'',
    component:ComplantHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintHistoryRoutingModule { }
