import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionModalComponent, ViewUserModalComponent } from './components';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForwardComponent } from './components/forward/forward.component';


@NgModule({
  declarations: [
    ActionModalComponent,
    ViewUserModalComponent,
    ForwardComponent
  
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
    ForwardComponent
  ]
})
export class SharedModule { }
