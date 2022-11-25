import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { CompliantService } from '../../../services';
import { LoadingService } from '../../../../shared/service/loader';
import {AppFilter  } from "../../../../shared";
import { ToastService } from '../../../../shared/service/toast';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id:any;
  report:any;
  constructor(private route:ActivatedRoute,
    private loaderSvc:LoadingService,
              private router: Router,
              private toastSvc:ToastService,
              private compliantSvc: CompliantService,
              private location: Location,
              private alertCtrl: AlertController,) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params=> {
    this.id = params.get('id')
   })
    this.getReport(this.id);
  }

  goBack() {
    // this.location.back();
    this.router.navigate(["/users/apps/complaint-history"])
  }

  getReport(id:any) {
   this.report=this.compliantSvc.reportDetail
  }

    
  async deleteReport() {
    const alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to Delete',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel')
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.loaderSvc.present('Please wait...');
            this.compliantSvc.delete({id:this.report.id}).subscribe(res=>{
              this.loaderSvc.dismiss();
              this.toastSvc.presentToast('Reported deleted successfully', 'success');
              setTimeout(()=>{
                this.router.navigate(["/users/apps/complaint-history"])
              },2000)
            },error=>{
              this.loaderSvc.dismiss();
             
              this.toastSvc.presentToast('Failed to get users', 'danger');
            })
          },
        },
      ],
    });

    await alert.present();
  }



}
