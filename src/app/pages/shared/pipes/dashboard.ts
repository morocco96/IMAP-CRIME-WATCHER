import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dashboard'
})
export class DashboardPipe implements PipeTransform {
	transform(value: any, args: string[]): any {
        console.log(value)
        console.log(args)
        let name =args
        let counts = value
        let count =counts.find(sum=>sum.name == name)
        console.log(count)
		return count?count.count:0
	}
}
