import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = environment.baseUrl
    jwt$ = new Subject<any>();
    constructor(private _http: HttpClient) { }
    user = new Subject();
    user$ = this.user.asObservable();
    isLogin$ = new Subject<any>();
    userDetail={}
    setUser(sub) {
        this.jwt$.next(sub["token"])
        this.isLogin$.next(true)
        this.user.next(sub["user"]);
    }
    create(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/v1/users`, payload.body);
    }

    changePassword(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/change-password`, payload.request);
    }

    emailVerification(payload): Observable<any> {
        return this._http.put(`${this.baseUrl}/v1/auth/email_verification/?token=${payload.token}`, payload.body);
    }

    userVerification(payload): Observable<any> {
        return this._http.put(`${this.baseUrl}/v1/auth/user_invitation/?token=${payload.token}`, payload.body);
    }

    login(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/login`, payload.body);
    }


    register(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/register`, payload.body);
    }

    getAllUser(payload): Observable<any> {
        return this._http.get(this.baseUrl + `/v1/users`, { params: payload.param });
    }

    delete(payload): Observable<any> {
        return this._http.delete(this.baseUrl + `/v1/users/${payload.id}` );
    }
    activate(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/activate-account`, payload.request);
    }

    checkEmail(payload): Observable<any> {
        return this._http.get(`${this.baseUrl}/check-email/${payload.email}`);
    }

    checkUsername(payload): Observable<any> {
        return this._http.get(`${this.baseUrl}/check-username/${payload.username}`);
    }
	logOut() {
		// this.user.next(null);
		this.jwt$.next(null);
		this.isLogin$.next(null);
		// this.storage.clear();
	}
}
