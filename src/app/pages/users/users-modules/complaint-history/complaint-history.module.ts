import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintHistoryRoutingModule } from './complaint-history-routing.module';
import { ComplantHistoryComponent } from './complant-history.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ComplantHistoryComponent
  ],
  imports: [
    CommonModule,
    ComplaintHistoryRoutingModule,
    IonicModule
  ]
})
export class ComplaintHistoryModule { }
