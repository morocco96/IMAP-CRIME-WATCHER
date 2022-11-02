import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedComplaintDetailRoutingModule } from './closed-complaint-detail-routing.module';
import { ClosedComplaintDetailComponent } from './closed-complaint-detail.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ClosedComplaintDetailComponent
  ],
  imports: [
    CommonModule,
    ClosedComplaintDetailRoutingModule,
    IonicModule
  ]
})
export class ClosedComplaintDetailModule { }
