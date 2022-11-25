export interface IHeaders {
	field?: string;
	label?: string;
	type?: string;
	choices?: any[];
	op?: string;
	data?: any;
}

export interface params {
	sidx?: string;
	sord?: string;
	rows?: number;
	startDate?: number;
	endDate?: number;
	page?: number;
	serviceStatus?: string;
	paymentStatus?: string;
	smsStatus?: string;
	emailStatus?: string;
	reference?: string;
	serviceId?: string;
	customerId?: string;
	mobile?: string;
	search?: boolean;
	filters?: string;
	records?: string;
	type?: string;
}

export class AppFilter implements params {
	sidx: string;
	sord?: string = 'desc';
	rows?: number = 10;
	page: number = 1;
	search?: boolean = true;
	filters?: string;
	records?: string;
	type?: string;
	constructor(instance?: params) {
		Object.assign(this, instance);
	}
}

// export class AppFilter implements params {
// 	sidx: string = 'dateCreated';
// 	sord: string = 'desc';
// 	rows: number = 10;
// 	page: number = 1;
// 	_search?: boolean = true;
// 	filters?: any;
// 	records?: string;
// 	constructor(instance?: params) {
// 		Object.assign(this, instance);
// 	}
// }
