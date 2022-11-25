import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class CompliantService {
    baseUrl = environment.baseUrl
    reportDetail={}
    constructor(private _http: HttpClient) { }

    createupdateProfile(payload): Observable<any> {
        return this._http.patch(`${this.baseUrl}/v1/users/${payload.id}`, payload.body);
    }

    changePassword(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/change-password`, payload.request);
    }

    create(payload): Observable<any> {
        return this._http.post(`${this.baseUrl}/v1/case`, payload.body);
    }
    delete(payload): Observable<any> {
        return this._http.delete(`${this.baseUrl}/v1/case/${payload.id}`);
    }

    getReports(payload): Observable<any> {
        return this._http.get(this.baseUrl + `/v1/case`, { params: payload.param });
    }
}
