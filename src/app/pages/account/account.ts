import {  Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage  {
  username: string;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public router: Router,
   
  ) { }

    reports:Array<any> = [
      {
        img:'/assets/IMAP-images/police-car.svg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
      {
        img:'/assets/img/speakers/bear.jpg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
      {
        img:'/assets/img/speakers/cheetah.jpg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
      {
        img:'/assets/img/speakers/lion.jpg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
      {
        img:'/assets/img/speakers/eagle.jpg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
      {
        img:'/assets/img/speakers/giraffe.jpg',
        title: 'Report Title',
        date: '03,Oct, 2022',
        desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that.'
      },
    ]










  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      
        buttons: [
          {
            text: 'Contact us',
            role: 'destructive',
            icon: 'home',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: 'Terms & Conditions',
            icon: 'home',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Logout',
            icon: 'home',
            handler: () => {
              this.router.navigate(['/login'])
            }
          }
        ]
      });
     await actionSheet.present();
    }
   
}
