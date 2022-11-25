import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from "../services"


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
pending:boolean;
error:boolean;
success:boolean;
  submitted = false;
  signupForm: FormGroup;
  constructor(
    private userSvc:UserService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['USER', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


create() {
  if(this.signupForm.valid) {
    this.userSvc.register({body:this.signupForm.value})
    .subscribe(res=>{
      this.pending=false;
      this.success=true;
      setTimeout(()=>{
        this.router.navigate(["/login"])
      },3000)
    })
    console.log(this.signupForm.value)
  }
}

isFieldValid(field: string) {
  return(
    this.signupForm.get(field).invalid && (this.signupForm.get(field).dirty || this.signupForm.get(field).touched)
  )
}
}
