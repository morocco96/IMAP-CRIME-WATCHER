import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ComplaintsComponent
  ],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    IonicModule
  ]
})
export class ComplaintsModule { }
