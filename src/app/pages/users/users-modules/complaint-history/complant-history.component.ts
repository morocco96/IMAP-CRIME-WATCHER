import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CompliantService } from '../../../services';
import { Report } from '../../../../models';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingService } from '../../../../shared/service/loader';
import {AppFilter  } from "../../../../shared";
import { ToastService } from '../../../../shared/service/toast';

@Component({
  selector: 'app-complant-history',
  templateUrl: './complant-history.component.html',
  styleUrls: ['./complant-history.component.css']
})
export class ComplantHistoryComponent  {
	filters: any;

  datas:any;
  id:any;
  status:string=""
  constructor(  public actionSheetCtrl: ActionSheetController,
    public router: Router,
    private loaderSvc:LoadingService,
    private complaintSvc:CompliantService,
    private dataService: DataService,
    private route: ActivatedRoute) {
      this.filters = new AppFilter({ sidx: '-createdat', rows: 2000, sord: 'des' });
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
          },{
            text: 'Terms & Conditions',
            icon: 'bulb-outline',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
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
