import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddUserComponent } from './add-user.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUsersRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AddUsersModule { }
