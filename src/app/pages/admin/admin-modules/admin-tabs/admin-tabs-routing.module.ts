import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'system-users',
        loadChildren:() => import('../system-users/system-users.module').then(m =>m.SystemUsersModule)
      },
      {
        path: 'complaints',
        loadChildren:() => import('../complaints/complaints.module').then(m =>m.ComplaintsModule)
      },
      {
        path:'manage-user',
        loadChildren:() => import('../manage-users/manage-users.module').then(m => m.ManageUsersModule)
      },
      {
        path: 'pending-complaint',
        loadChildren:() => import('../pending-complaint/pending-complaint.module').then(m => m.PendingComplaintModule)
      },
      {
        path: 'closed-complaint',
        loadChildren:() => import('../closed-complaint/closed-complaint.module').then(m => m.ClosedComplaintModule)
      },
      {
        path: 'pending-detail/:id',
        loadChildren:() => import ('../pending-complaint-detail/pending-complaint-detail.module').then(m =>m.PendingComplaintDetailModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTabsRoutingModule { }
