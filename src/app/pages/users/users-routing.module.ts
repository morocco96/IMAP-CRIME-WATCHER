import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
 {
  path: '',
  component: UsersComponent,
  children:[
    {
      path:'',
      redirectTo: 'apps',
      pathMatch: 'full'
    },
    {
      path:'apps',
      loadChildren:() => import ('./users-modules/user-tabs/user-tabs.module').then(m => m.UserTabsModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
