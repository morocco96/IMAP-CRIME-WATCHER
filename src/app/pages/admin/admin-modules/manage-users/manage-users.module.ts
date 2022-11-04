import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [
    ManageUsersComponent,
   
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    IonicModule
  ]
})
export class ManageUsersModule { }
