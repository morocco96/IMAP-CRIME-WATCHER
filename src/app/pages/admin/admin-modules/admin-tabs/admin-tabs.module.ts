import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTabsRoutingModule } from './admin-tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    AdminTabsRoutingModule,
    IonicModule
  ]
})
export class AdminTabsModule { }
