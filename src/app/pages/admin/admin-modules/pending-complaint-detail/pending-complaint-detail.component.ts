import { Component, OnInit } from '@angular/core';
import {  Route } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common'
import { ModalController } from '@ionic/angular';
import { ActionModalComponent, ViewUserModalComponent, ForwardComponent } from '../../../shared';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CompliantService } from '../../../services';
import { LoadingService } from '../../../../shared/service/loader';
import {AppFilter  } from "../../../../shared";
import { ToastService } from '../../../../shared/service/toast';


@Component({
  selector: 'app-pending-complaint-detail',
  templateUrl: './pending-complaint-detail.component.html',
  styleUrls: ['./pending-complaint-detail.component.css']
})
export class PendingComplaintDetailComponent implements OnInit {

  report:any;
  id:any;
 
  constructor(
    private loaderSvc:LoadingService,
              private route:ActivatedRoute,
              private dataService: DataService,
              private location: Location,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private router: Router,
              private toastSvc:ToastService,
              private compliantSvc: CompliantService,
         ) { }

  ngOnInit(): void {

  }

  goBack() {
    // this.location.back();
    this.router.navigate(["/users/apps/complaint-history"])
  }

  getReport(id:any) {
   this.report=this.compliantSvc.reportDetail
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ActionModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

   
  }


  async openUserModal() {
    const modal = await this.modalCtrl.create({
      component: ViewUserModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

  }

  async forwardModal() {
    const modal = await this.modalCtrl.create({
      component: ForwardComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

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
                this.router.navigate(["/admin/apps/pending-complaint"])
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

  getadminDetail() {
    this.dataService.getAdminPendingDetail(this.id).subscribe(res => {
      this.report = res;
      console.log(res);
    })
  }


}
