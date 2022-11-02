import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { UsersComponent } from './users.component';
import { IonicModule } from '@ionic/angular';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    AddUsersComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SystemUsersModule { }
