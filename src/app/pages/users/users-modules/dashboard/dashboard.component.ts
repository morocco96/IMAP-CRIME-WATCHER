import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private dataService: DataService
  ) { }
    report
  ngOnInit(): void {
    this.dataService.getReports().subscribe(res => {
      this.report = res;
    })
  }

  

  goTo() {
    this.router.navigate(['/users/apps/create-complaint'])
  }
  async showConfirm() {
    const confirm = await this.alertCtrl.create({
   
      message: 'You are about to place an emergency call to  security operatives, confirm your action',
      buttons: [
        {
          text: 'CANCEL',
          role:'cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'MAKE A CALL',
          role:'agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    await confirm.present();
  }








// *********************************************************
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
