import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffTabsRoutingModule } from './staff-tabs-routing.module';
import { StaffTabsComponent } from './staff-tabs.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    StaffTabsComponent
  ],
  imports: [
    CommonModule,
    StaffTabsRoutingModule,
    IonicModule
  ]
})
export class StaffTabsModule { }
