import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from "../services"
import { LoadingService } from '../../shared/service/loader';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  error: boolean;
  pending: boolean;
  submitted = false;
  loginForm: FormGroup;
  constructor(
    private userSvc: UserService,
    private loaderSvc: LoadingService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.error = false
      this.loaderSvc.present('Please wait...');
      this.userSvc.login({ body: this.loginForm.value }).subscribe(res => {
        this.loaderSvc.dismiss();
        this.userSvc.setUser(res);
        if (res["role"] == "USER") { 
          this.router.navigate(['/users'], { replaceUrl: true })

        } else if (res["role"] == "ADMIN") {
          this.router.navigate(['/admin'], { replaceUrl: true })

        } else if (res["role"] === "STAFF") {
          this.router.navigate(['/staff'], { replaceUrl: true })

        }
      }, error => {
        this.loaderSvc.dismiss();
        this.error = true
      })
    }
  }

  isFieldValid(field: string) {
    return (
      this.loginForm.get(field).invalid && (this.loginForm.get(field).dirty || this.loginForm.get(field).touched)
    )
  }
}





