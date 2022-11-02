import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTabsComponent } from './user-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: UserTabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'create-complaint',
        loadChildren:() => import('../create-complaint/create-complaint.module').then(m => m.CreateComplaintModule)
      },
      {
        path: 'complaint-history',
        loadChildren:() => import('../complaint-history/complaint-history.module').then(m => m.ComplaintHistoryModule)
      },
      {
        path: 'complaint-detail/:id',
        loadChildren:() => import('../complaint-details/complaint-details.module').then(m => m.ComplaintDetailsModule)
      },
      {
        path: 'pending',
        loadChildren:() => import('../pending/pending.module').then(m => m.PendingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTabsRoutingModule { }
