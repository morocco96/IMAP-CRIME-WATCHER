import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-complant-history',
  templateUrl: './complant-history.component.html',
  styleUrls: ['./complant-history.component.css']
})
export class ComplantHistoryComponent implements OnInit {

  constructor(  public actionSheetCtrl: ActionSheetController,
    public router: Router,
    private dataService: DataService,
    private route: ActivatedRoute) {}
    datas:any;
    id:any;
  ngOnInit(): void {

  
    this.dataService.getReports().subscribe(res => {
      this.datas = res;
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
