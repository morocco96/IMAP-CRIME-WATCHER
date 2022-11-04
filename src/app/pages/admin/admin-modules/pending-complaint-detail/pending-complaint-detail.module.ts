import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComplaintDetailRoutingModule } from './pending-complaint-detail-routing.module';
import { PendingComplaintDetailComponent } from './pending-complaint-detail.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PendingComplaintDetailComponent
  ],
  imports: [
    CommonModule,
    PendingComplaintDetailRoutingModule,
    IonicModule
  ]
})
export class PendingComplaintDetailModule { }
