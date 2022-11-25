import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionModalComponent, ViewUserModalComponent } from './components';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForwardComponent } from './components/forward/forward.component';
import { DashboardPipe } from "./pipes/dashboard";

@NgModule({
  declarations: [
    ActionModalComponent,
    ViewUserModalComponent,
    ForwardComponent,
    DashboardPipe
  
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ActionModalComponent,
    ViewUserModalComponent,
    ForwardComponent,
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardPipe
  ]
})
export class SharedModule { }
