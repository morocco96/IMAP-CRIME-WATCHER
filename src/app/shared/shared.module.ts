import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentConfigPipe } from './pipes/config';
import { DatePipe } from './pipes/date.pipe';
import { StrimOptionPipe } from './pipes/slice.pipe';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { MomentModule } from 'angular2-moment';
@NgModule({
	declarations: [ DatePipe, StrimOptionPipe, ShipmentConfigPipe ],
	imports: [ CommonModule ],
	exports: [ DatePipe, StrimOptionPipe, ShipmentConfigPipe ]
})
export class SharedModule {}
