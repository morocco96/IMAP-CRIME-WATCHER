import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CompliantService,UserService } from '../../../services';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingService } from '../../../../shared/service/loader';
import { ToastService } from '../../../../shared/service/toast';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {
  theActualPicture
  reportForm: FormGroup;
  user
  constructor(private router: Router,
    private userSvc:UserService,
    private loaderSvc:LoadingService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private fb: FormBuilder,
    private toastSvc: ToastService,
    private complaintSvc: CompliantService) {

    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      complaintType: ['', Validators.required],
      complaintDetail: ['', Validators.required],
      location: ['', Validators.required],
      reporter: [''],
      status: ['Pending', Validators.required],

    })
    this.userSvc.user$.subscribe(usr=>{
      this.user =usr
      console.log(usr)
      if(this.user){
        this.reportForm.get("reporter").patchValue(this.user.id)
      }
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
			source: CameraSource.Camera
    });

    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
  }

  dataURItoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  createReport() {
    if (this.reportForm.valid) {
      this.loaderSvc.present('Please wait...');
      const formData = new FormData();
      // If image is attached
      if (this.theActualPicture) {
        const date = new Date().valueOf();
        // Replace extension according to your media type
        const imageName = date + '.jpeg';
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(this.theActualPicture);
        const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
        formData.append("file", imageFile);
      }

      const blob = new Blob([JSON.stringify(this.reportForm.value)], {
        type: "application/json",
      });
      formData.append("data", blob);
      this.complaintSvc.create({body:formData}).subscribe(
        res=>{
          this.loaderSvc.dismiss();
          this.toastSvc.presentToast('Report created successfully', 'success');
          this.reportForm.reset();
          setTimeout(()=>{
            this.router.navigate(['/users/apps/complaint-history'])
          },2000)
       
        },error=>{
          this.loaderSvc.dismiss();
          this.toastSvc.presentToast(`Failed to submit report`, 'danger');
        }
      )
    }

      // this.dataService.createReport(data)
      // this.router.navigate(['/users/apps/complaint-history'])
      // this.showAlert()
      // this.reportForm.reset()



  }

  isFieldValid(field: string) {
    return (
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


  complaintType: Array<any> = [
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

  location: Array<any> = [
    'Transformer Street',
    'Hillcon Street',
    'IMAP Gate',
    'Delta Prospect Street'
  ]
}



