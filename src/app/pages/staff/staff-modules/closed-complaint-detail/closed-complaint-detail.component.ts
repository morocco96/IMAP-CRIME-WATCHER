import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ActionModalComponent, ViewUserModalComponent } from '../../../shared';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-closed-complaint-detail',
  templateUrl: './closed-complaint-detail.component.html',
  styleUrls: ['./closed-complaint-detail.component.css']
})
export class ClosedComplaintDetailComponent implements OnInit {
    report:any;
    id:any
  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private location: Location,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }
 message ="hhhhhh"
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getClosed();
  }
  goBack() {
    this.location.back()
  }


  getClosed() {
    this.dataService.getStaffClosedDetail(this.id).subscribe(res => {
      this.report = res;
      console.log(this.report);
    })
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

}
