import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';

const routes: Routes = [
 {
  path: '',
  component: StaffComponent,
  children: [
    {
      path: '',
      redirectTo: 'apps',
      pathMatch: 'full'
    },
    {
      path: 'apps',
      loadChildren:() => import('./staff-modules/staff-tabs/staff-tabs.module').then(m => m.StaffTabsModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
