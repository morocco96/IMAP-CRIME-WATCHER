import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintDetailsRoutingModule } from './complaint-details-routing.module';
import { ComplaintDetailsComponent } from './complaint-details.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ComplaintDetailsComponent
  ],
  imports: [
    CommonModule,
    ComplaintDetailsRoutingModule,
    IonicModule
  ]
})
export class ComplaintDetailsModule { }
