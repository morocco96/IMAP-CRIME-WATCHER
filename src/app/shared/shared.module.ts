import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentConfigPipe } from './pipes/config';
import { DatePipe } from './pipes/date.pipe';
import { StrimOptionPipe } from './pipes/slice.pipe';
import { DashboardPipe } from "./pipes/dashboard";
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { MomentModule } from 'angular2-moment';
@NgModule({
	declarations: [DashboardPipe, DatePipe, StrimOptionPipe, ShipmentConfigPipe ],
	imports: [ CommonModule ],
	exports: [ DashboardPipe,DatePipe, StrimOptionPipe, ShipmentConfigPipe ]
})
export class SharedModule {}
