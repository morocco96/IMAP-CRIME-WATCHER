import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    baseUrl = environment.baseUrl
    reportDetail={}
    constructor(private _http: HttpClient) { }

   

    getDashboard(payload): Observable<any> {
        return this._http.get(this.baseUrl + `/v1/dashboard/count`, { params: payload.param });
    }
}
