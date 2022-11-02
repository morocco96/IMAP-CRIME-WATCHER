import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComplaintComponent } from './create-complaint.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateComplaintRoutingModule { }
