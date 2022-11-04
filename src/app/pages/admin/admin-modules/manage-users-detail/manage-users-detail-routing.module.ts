import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersDetailComponent } from './manage-users-detail.component';

const routes: Routes = [
  {
    path:'',
    component: ManageUsersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersDetailRoutingModule { }
