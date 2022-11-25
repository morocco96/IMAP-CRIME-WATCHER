import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'
import { CompliantService } from '../../../services';
import { LoadingService } from '../../../../shared/service/loader';
import {AppFilter  } from "../../../../shared";
import { ToastService } from '../../../../shared/service/toast';


@Component({
  selector: 'app-closed-complaint',
  templateUrl: './closed-complaint.component.html',
  styleUrls: ['./closed-complaint.component.css']
})
export class ClosedComplaintComponent implements OnInit {
    reports
  constructor(private dataService: DataService,
    public router: Router,
    public actionSheetCtrl: ActionSheetController, 
      private loaderSvc:LoadingService,
      private complaintSvc:CompliantService,
    ) {  this.filters = new AppFilter({ sidx: '-createdat', rows: 2000, sord: 'des' });
    console.log("in compliant")
    this.getPage(1)
    }
    filters: any;

    datas:any;
    status:string="Pending"

    reportDetail(report){
      this.complaintSvc.reportDetail=report;
      this.router.navigate([`/admin/apps/pending-detail/${report.id}`], { replaceUrl: true })
    }
  
  getPage(page: number) {
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
  
reporttDtail(report){

}
    ngOnInit(): void {
      // this.dataService.getAdminCloseds().subscribe(data => {
      //   this.reports = data;
      // })
    }
  
    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
  
        buttons: [
          {
            text: 'Contact us',
            role: 'destructive',
            icon: 'people-outline',
            handler: () => {
              console.log('Destructive clicked');
            }
          }, {
            text: 'Terms & Conditions',
            icon: 'bulb-outline',
            handler: () => {
              console.log('Archive clicked');
            }
          }, {
            text: 'Logout',
            icon: 'power-outline',
            handler: () => {
              this.router.navigate(['/login'])
            }
          }
        ]
      });
      await actionSheet.present();
    }
  
  
}
