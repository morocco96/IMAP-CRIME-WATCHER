import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common'
import { ModalController } from '@ionic/angular';
import { ActionModalComponent, ViewUserModalComponent } from '../../../shared';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pending-complaint-detail',
  templateUrl: './pending-complaint-detail.component.html',
  styleUrls: ['./pending-complaint-detail.component.css']
})
export class PendingComplaintDetailComponent implements OnInit {

  report:any;
  id:any;
  message = "Welcome to the world of technology"
  constructor(private route:ActivatedRoute,
              private dataService: DataService,
              private location: Location,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController
         ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStaffReport();
  }
  goBack() {
    this.location.back()
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ActionModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }


  async openUserModal() {
    const modal = await this.modalCtrl.create({
      component: ViewUserModalComponent,
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
            console.log('Confirm')
          },
        },
      ],
    });

    await alert.present();
  }

  getStaffReport() {
    this.dataService.getStaffReport(this.id).subscribe(res => {
      this.report = res;
      console.log(res);
    })
  }




}
