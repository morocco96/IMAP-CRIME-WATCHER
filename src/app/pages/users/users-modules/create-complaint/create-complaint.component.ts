import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../../models';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {

    reportForm: FormGroup;
  constructor(private router:Router,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private fb: FormBuilder,
    private dataService: DataService) {

      this.reportForm = this.fb.group({
        title: ['', Validators.required],
        dateCreated: ['', Validators.required],
        complaintType: ['', Validators.required],
        complaintDetail: ['', Validators.required],
        location: ['', Validators.required],
        status: ['', Validators.required]
      })
     }

    ngOnInit(): void {
      
    }

    selectOptions = {
      header: 'Select a Location'
    };
    
    createReport() {
    if(this.reportForm.valid) {
      let data = new Object();
      data['id'] = new Date().getTime();
      data = {...{}, ...this.reportForm.value}

     this.dataService.createReport(data)
      this.router.navigate(['/users/apps/complaint-history'])
      this.showAlert()
      this.reportForm.reset()
      
     
    }
      
      
    }

    isFieldValid(field: string) {
      return(
        this.reportForm.get(field).invalid && (this.reportForm.get(field).dirty || this.reportForm.get(field).touched)
      )
    }



    async showAlert() {
      const alert = await this.alertCtrl.create({
     
        message: 'Report Sent Successfully'
        
        
      });
      await alert.present();
    
    }

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



