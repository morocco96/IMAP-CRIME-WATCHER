import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../shared/service/loader';
import {AppFilter  } from "../../../../shared";
import { ToastService } from '../../../../shared/service/toast';
import { CompliantService } from '../../../services';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
	filters: any;

  datas:any;
  status:string="Pending"
  constructor(
    public router: Router,
    private loaderSvc:LoadingService,
    private complaintSvc:CompliantService,
  ) {  this.filters = new AppFilter({ sidx: '-createdat', rows: 2000, sord: 'des' });
  console.log("in compliant")
  this.getPage(1)
}

getPage(page: number) {
console.log("iget n compliant")
this.loaderSvc.present('Please wait...');
this.filters.page = page;
this.complaintSvc.getReports({ param: this.filters }).subscribe(
  (res) => {
    this.loaderSvc.dismiss();
    this.datas=res.reports
  },
  (error) => {
    this.loaderSvc.dismiss();
  }
);
}

filterComposer(query) {
let mongofilter: { [id: string]: any } = {};
let customername: { [id: string]: any } = {};

  let c2: { [id: string]: any } = {};
  customername['$regex'] = this.status;
  customername['$options'] = 'i';
  c2['status'] = customername;


  let oroperator: { [id: string]: any }[] = [];
  oroperator = [ c2];
  mongofilter['$or'] = oroperator;

return mongofilter;
}


  ngOnInit(): void {
  }

}
