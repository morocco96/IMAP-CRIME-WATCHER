import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComplaintRoutingModule } from './pending-complaint-routing.module';
import { PendingComplaintComponent } from './pending-complaint.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PendingComplaintComponent
  ],
  imports: [
    CommonModule,
    PendingComplaintRoutingModule,
    IonicModule
  ]
})
export class PendingComplaintModule { }
