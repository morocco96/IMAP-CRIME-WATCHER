import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path:'',
        redirectTo: 'apps',
        pathMatch: 'full'
      },
      {
        path:'apps',
        loadChildren:() =>import('./admin-modules/admin-tabs/admin-tabs.module').then(m => m.AdminTabsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
