import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb: FormBuilder,
              private router:Router) {

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      department: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  create() {
    if(this.userForm.valid) {
      console.log(this.userForm.value)
      this.router.navigate(['/admin/apps/manage-user'])
    }
  }
  
  isFieldValid(field: string) {
    return(
      this.userForm.get(field).invalid && (this.userForm.get(field).dirty || this.userForm.get(field).touched)
    )
  }
}
