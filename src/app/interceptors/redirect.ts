import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../pages/services';
import { ToastService } from '../shared/service/toast';
@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
	constructor(private _injector: Injector) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(
				(event) => {},
				(err) => {
					if (err.status === 401) {
						const coreSVC = this._injector.get(UserService);
						const toastSVC = this._injector.get(ToastService);
						const router = this._injector.get(Router);
						coreSVC.logOut();
						toastSVC.presentToast('You have been logged out!', 'warning');
						router.navigate([ '' ]);
					}
				}
			)
		);
	}
}
