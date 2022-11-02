import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComplaintRoutingModule } from './create-complaint-routing.module';
import { CreateComplaintComponent } from './create-complaint.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComplaintComponent
  ],
  imports: [
    CommonModule,
    CreateComplaintRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateComplaintModule { }
