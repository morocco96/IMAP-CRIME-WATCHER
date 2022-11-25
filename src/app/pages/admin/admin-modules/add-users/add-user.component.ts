import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../../../services"
import { LoadingService } from '../../../../shared/service/loader';
import { ToastService } from '../../../../shared/service/toast';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup
  constructor(
    private toastSvc: ToastService,
              private userSvc: UserService,
              private loaderSvc: LoadingService,
              private fb: FormBuilder,
              private router:Router) {

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      department: ['', Validators.required],
      password: ['', Validators.required],
      role: ['STAFF', Validators.required]
    })
   }

  ngOnInit(): void {
  }
error
  create() {
    if(this.userForm.valid) {
     let data=this.userForm.value;
      data["fullName"]=`${data["firstName"]} ${data["lastName"]}`
      this.loaderSvc.present('Please wait...');
      this.userSvc.create({ body: this.userForm.value }).subscribe(res => {
        this.loaderSvc.dismiss();
        this.toastSvc.presentToast('User added successfully', 'success');
        setTimeout(()=>{
          this.router.navigate(['/admin/apps/manage-user'])
        },2000)
      
      }, error => {
        this.loaderSvc.dismiss();
        this.error = true
      })
    }
    
    }
  
  
  isFieldValid(field: string) {
    return(
      this.userForm.get(field).invalid && (this.userForm.get(field).dirty || this.userForm.get(field).touched)
    )
  }
}
