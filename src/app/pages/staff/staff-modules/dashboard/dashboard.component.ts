import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'
import { DashboardService ,UserService} from '../../../services';
import { LoadingService } from '../../../../shared/service/loader';
import { ToastService } from '../../../../shared/service/toast';
import {AppFilter  } from "../../../../shared";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any
  filters
  counts=[]
    constructor(
      public router: Router,
      public actionSheetCtrl: ActionSheetController,
      private loaderSvc:LoadingService,
      private dashboardSvc:DashboardService,
      private toastSvc:ToastService,
      private userSvc:UserService
    ) { 
      this.user=userSvc.userDetail
      this.filters = new AppFilter({ sidx: '-createdat', rows: 2000, sord: 'des' });
      let filter = this.filterComposer("");
      this.filters.filters = JSON.stringify(filter);
      this.getDashboard()
    }
      report
  ngOnInit(): void {
  }

  getDashboard(){
    this.loaderSvc.present('Please wait...');
    this.dashboardSvc.getDashboard({param:this.filters}).subscribe(res=>{
      this.counts=res?res:[]
      this.loaderSvc.dismiss();
    },error=>{
      this.loaderSvc.dismiss();
      this.toastSvc.presentToast('Failed to report summary', 'danger');
    })
  }
  getComplain(value){
    let count =this.counts.find(sum=>sum.name == value)
    return count?count.count:0
  }
  filterComposer(query) {
		let mongofilter: { [id: string]: any } = {};
			mongofilter['handler'] = this.user["id"];
		return mongofilter;
	}

  goTo() {
    this.router.navigate(['/users/apps/create-complaint'])
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
              this.userSvc.logOut()
              this.router.navigate(['/login'])
            }
          }
        ]
      });
     await actionSheet.present();
    }

}
