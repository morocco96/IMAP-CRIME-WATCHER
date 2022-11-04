import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common'
import { ModalController } from '@ionic/angular';
import { ActionModalComponent, ViewUserModalComponent } from '../../../shared';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-users-detail',
  templateUrl: './manage-users-detail.component.html',
  styleUrls: ['./manage-users-detail.component.css']
})
export class ManageUsersDetailComponent implements OnInit {
user:any;
id:any;
  constructor(private route:ActivatedRoute,
    private dataService: DataService,
    private location: Location,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getUserDetail(this.id).subscribe(res => {
      this.user = res
    })
  }

  goBack() {
    this.location.back()
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
