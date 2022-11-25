import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'myDateConverter'
})
export class DatePipe implements PipeTransform {
	transform(value: number): any {
		if (value) {
			const format = new Date();
			var date = new Date(format.setTime(value));
			return date;
		}
	}
}
