import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {

  submitted = false;
  signupForm: FormGroup;
  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


create() {
  if(this.signupForm.valid) {
    console.log(this.signupForm.value)
  }
}

isFieldValid(field: string) {
  return(
    this.signupForm.get(field).invalid && (this.signupForm.get(field).dirty || this.signupForm.get(field).touched)
  )
}
}
