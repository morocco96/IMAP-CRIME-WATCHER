import { AlertController } from '@ionic/angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { UserService } from '../pages/services';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
	token: string;

	constructor(private coreSvc: UserService, private alertCtrl: AlertController) {
		this.coreSvc.jwt$.subscribe((jwt) => {
			if (jwt) {
				this.token = jwt;
			}
		});
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		req = req.clone({
			setHeaders: {
				authorization: this.token ? `Bearer ${this.token}` : 'sdgdfg'
			}
		});

		return next.handle(req);
	}

	// Adds the token to your headers if it exists
	private addToken(request: HttpRequest<any>, token: any) {
		if (token) {
			let clone: HttpRequest<any>;
			clone = request.clone({
				setHeaders: {
					authorization: `Bearer ${token}`
				}
			});
			return clone;
		}

		return request;
	}
}
