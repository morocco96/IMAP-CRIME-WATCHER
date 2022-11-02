import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  
  submitted = false;
  loginForm:FormGroup;
  constructor(
    
    public router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password:  ['', Validators.required]
    })

   }

  onLogin() {
    this.submitted = true;
   if(this.loginForm.valid) {
    if(this.loginForm.get('username').value ==='user' && this.loginForm.get('password').value ==="user") {
      console.log(this.loginForm.value);
      this.router.navigate(['/users'])
      this.loginForm.reset()
      
    }else if(this.loginForm.get('username').value ==='admin' && this.loginForm.get('password').value ==="admin") {
      console.log(this.loginForm.value);
      this.router.navigate(['/admin'])
      this.loginForm.reset()
      
    }else if(this.loginForm.get('username').value ==='staff' && this.loginForm.get('password').value ==="staff") {
      console.log(this.loginForm.value);
      this.router.navigate(['/staff'])
      this.loginForm.reset()
      
    }
 
   }
    }

    isFieldValid(field: string) {
      return(
        this.loginForm.get(field).invalid && (this.loginForm.get(field).dirty || this.loginForm.get(field).touched)
      )
    }
  }





