import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap, timeout } from 'rxjs/operators';
import { ToastService } from '../shared/service/toast';
import { LoadingService } from '../shared/service/loader';
@Injectable()
export class TimeOutInterceptor implements HttpInterceptor {
	constructor(private _injector: Injector) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			timeout(10000),
			tap(
				(event) => {},
				(err) => {
					// timeout of 5000 ms
					if (err instanceof HttpErrorResponse) {
						const loaderSVC = this._injector.get(LoadingService);
						const toastSVC = this._injector.get(ToastService);
						loaderSVC.dismiss();
						toastSVC.presentToast(
							'Request token too long to process, check your internet connection then pull to refresh',
							'warning'
						);
						console.log('Error Caught By Interceptor');
						//Observable.throw(err);
					}
				}
			)
		);
	}
}
