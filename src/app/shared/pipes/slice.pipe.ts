import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'strimOption'
})
export class StrimOptionPipe implements PipeTransform {
	transform(value: any, args: string[]): any {
		return value.slice(24);
	}
}
