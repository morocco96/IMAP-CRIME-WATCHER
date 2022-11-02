import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingRoutingModule } from './pending-routing.module';
import { PendingComponent } from './pending.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    PendingRoutingModule,
    IonicModule
  ]
})
export class PendingModule { }
