import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dashboard'
})
export class DashboardPipe implements PipeTransform {
	transform(value: any, args: string[]): any {
        let name =args[0]
        let counts = value
        let count =counts.find(sum=>sum.name == name)
		return count?count.count:0
	}
}
