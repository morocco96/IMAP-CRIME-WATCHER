import { Component, OnDestroy, Injectable } from '@angular/core';
import { NavController, MenuController, PopoverController, Platform } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
// import { SubSink } from 'subsink';
@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	isLoading = false;

	constructor(public loadingController: LoadingController) {}

	async present(msg) {
		this.isLoading = true;
		return await this.loadingController
			.create({
				message: msg,
				duration: 15000
			})
			.then((a) => {
				a.present().then(() => {
					console.log('presented');
					if (!this.isLoading) {
						a.dismiss().then(() => console.log('abort presenting'));
					}
				});
			});
	}

	async dismiss() {
		this.isLoading = false;
		return await this.loadingController.dismiss().then(() => console.log('dismissed'));
	}
}
