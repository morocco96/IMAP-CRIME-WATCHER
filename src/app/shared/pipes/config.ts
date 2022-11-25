import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shipmentConfig'
})
export class ShipmentConfigPipe implements PipeTransform {
	transform(value: any): any {
		if (value) {
			console.log(value);
			console.log(JSON.parse(value.config));
			let cur = JSON.parse(value.config);
			return cur.currency;
		}
	}
}
