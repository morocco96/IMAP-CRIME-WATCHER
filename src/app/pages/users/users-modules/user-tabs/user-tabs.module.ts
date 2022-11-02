import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTabsRoutingModule } from './user-tabs-routing.module';
import { UserTabsComponent } from './user-tabs.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    UserTabsComponent
  ],
  imports: [
    CommonModule,
    UserTabsRoutingModule,
    IonicModule
  ]
})
export class UserTabsModule { }
