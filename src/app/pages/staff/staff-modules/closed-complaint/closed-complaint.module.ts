import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedComplaintRoutingModule } from './closed-complaint-routing.module';
import { ClosedComplaintComponent } from './closed-complaint.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ClosedComplaintComponent
  ],
  imports: [
    CommonModule,
    ClosedComplaintRoutingModule,
    IonicModule
  ]
})
export class ClosedComplaintModule { }
