import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComplaintDetailRoutingModule } from './pending-complaint-detail-routing.module';
import { PendingComplaintDetailComponent } from './pending-complaint-detail.component';


@NgModule({
  declarations: [
    PendingComplaintDetailComponent
  ],
  imports: [
    CommonModule,
    PendingComplaintDetailRoutingModule
  ]
})
export class PendingComplaintDetailModule { }
