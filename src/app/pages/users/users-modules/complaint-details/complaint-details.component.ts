import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id:any;
  report:any;
  constructor(private route:ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private location: Location,
              private alertCtrl: AlertController) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params=> {
    this.id = params.get('id')
   })
    this.getReport(this.id);
  }

  goBack() {
    this.location.back();
  }

  getReport(id:any) {
   this.dataService.getReport(id).subscribe(res => {
     this.report = res
    console.log(res)
   })
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
