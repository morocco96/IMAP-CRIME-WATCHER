import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../../models';
import { Camera, CameraResultType } from '@capacitor/camera';


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
        complaintType: ['', Validators.required],
        complaintDetail: ['', Validators.required],
        location: ['', Validators.required],

      })
     }

    ngOnInit(): void {
      
    }
    selectOptions = {
      header: 'Complaint Type'
    };
    selectLocation = {
      header: 'Select a Location'
    };

    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
    
      // Here you get the image as result.
      const theActualPicture = image.dataUrl;
    }
    
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


    complaintType:Array<any> = [
      "Crime in Progress",
      'Disruptive Behavior',
      'Drug Use',
      'Human Trafficking',
      'Robbery/ Theft',
      'Sexual Assualt',
      'Suspicious Activity',
      'Vandalism',
      'Shoplifting',
      'Resident Burglary'
    ]

    location:Array<any> = [
     'Transformer Street',
     'Hillcon Street',
     'IMAP Gate',
     'Delta Prospect Street'
    ]
}



