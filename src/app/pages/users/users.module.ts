import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    IonicModule
  ]
})
export class UsersModule { }
