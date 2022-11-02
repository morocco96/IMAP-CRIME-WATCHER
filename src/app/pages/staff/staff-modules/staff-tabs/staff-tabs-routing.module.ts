import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffTabsComponent } from './staff-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: StaffTabsComponent,
    children: [
      {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'pending-complaint',
        loadChildren:() =>  import('../pending-complaints/pending-complaints.module').then(m => m.PendingComplaintsModule)
      },
      {
        path: 'closed-complaint',
        loadChildren:() => import('../closed-complaint/closed-complaint.module').then(m => m.ClosedComplaintModule)
      },
      {
        path:'pending-detail/:id',
        loadChildren:() => import('../pending-complaint-detail/pending-complaint-detail.module').then(m =>m.PendingComplaintDetailModule)
      },
      {
        path: 'closed-detail/:id',
        loadChildren:() => import('../closed-complaint-detail/closed-complaint-detail.module').then(m => m.ClosedComplaintDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffTabsRoutingModule { }
