import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(  public router: Router,
                public actionSheetCtrl: ActionSheetController,) { }

  ngOnInit(): void {
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
