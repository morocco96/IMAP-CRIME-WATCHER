import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pending-complaints',
  templateUrl: './pending-complaints.component.html',
  styleUrls: ['./pending-complaints.component.css']
})
export class PendingComplaintsComponent implements OnInit {

  reports:any
  constructor(private  dataService: DataService,
             public router: Router,
             public actionSheetCtrl: ActionSheetController,) { }

  ngOnInit(): void {
    this.dataService.getStaffReports().subscribe(res => {
      this.reports = res;
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
