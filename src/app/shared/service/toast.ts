import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
// import { SubSink } from 'subsink';
@Injectable({
	providedIn: 'root'
})
export class ToastService {
	constructor(public toastController: ToastController) {}

	async presentToast(msg, color) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 5000,
			color: color
		});
		toast.present();
	}
}
