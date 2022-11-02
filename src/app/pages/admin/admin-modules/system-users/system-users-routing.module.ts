import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:'',
    component: UsersComponent,
    children:[
    
      {
        path: '',
        component: AddUsersComponent
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUsersRoutingModule { }
