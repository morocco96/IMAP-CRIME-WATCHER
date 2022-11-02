import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADMIN_PENDING, REPORTS, STAFF_CLOSED, STAFF_REPORT, users } from '../../mocks';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  reports = REPORTS;
  staffReport = STAFF_REPORT;
  staffClosed = STAFF_CLOSED;
  users = users;
  adminPending = ADMIN_PENDING;
  dark = new Subject();
  darkMode = this.dark.asObservable();

  
  setDarkMode(sub) {
    this.dark.next(sub);
  }
  createReport(report) {
    this.reports.push(report)
  }

 

 getReports() {
  return of(this.reports)
 }



getReport(id:number) {
 let report = this.reports.find(value => {
   return value.id == id;
 })
 return of(report);
}

removeReport(id:number) {
let report = this.reports.filter(value => {
  return value.id !== id
})
return  of(report);
}


getStaffReports() {
  return of(this.staffReport)
}

getStaffReport(id:number) {
  let report = this.staffReport.find(value => {
    return value.id == id;
  })
  return of(report);
}


getStaffClosed() {
  return of(this.staffClosed);
}

getStaffClosedDetail(id:number) {
  let report = this.staffClosed.find(value => {
    return value.id == id;
  })
  return of(report);
}


getUser() {
  return of(users);
}


getAdminPendingComplaint() {
  return of(this.adminPending)
}

getAdminPendingDetail(id:number) {
  let report = this.adminPending.find(value => {
    return value.id == id;
  })
  return of(report);
}

}
