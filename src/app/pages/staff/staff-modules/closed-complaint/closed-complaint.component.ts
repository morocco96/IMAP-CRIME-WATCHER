import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-closed-complaint',
  templateUrl: './closed-complaint.component.html',
  styleUrls: ['./closed-complaint.component.css']
})
export class ClosedComplaintComponent implements OnInit {
  reports: any;
  constructor(private dataService: DataService,
    public router: Router,
    public actionSheetCtrl: ActionSheetController,) { }

  ngOnInit(): void {
    this.dataService.getStaffClosed().subscribe(data => {
      this.reports = data;
    })
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
