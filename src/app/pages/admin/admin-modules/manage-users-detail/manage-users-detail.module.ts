import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersDetailRoutingModule } from './manage-users-detail-routing.module';
import { ManageUsersDetailComponent } from './manage-users-detail.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ManageUsersDetailComponent
  ],
  imports: [
    CommonModule,
    ManageUsersDetailRoutingModule,
    IonicModule
  ]
})
export class ManageUsersDetailModule { }
