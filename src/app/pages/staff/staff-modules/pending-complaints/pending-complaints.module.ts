import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComplaintsRoutingModule } from './pending-complaints-routing.module';
import { PendingComplaintsComponent } from './pending-complaints.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PendingComplaintsComponent
  ],
  imports: [
    CommonModule,
    PendingComplaintsRoutingModule,
    IonicModule
  ]
})
export class PendingComplaintsModule { }
