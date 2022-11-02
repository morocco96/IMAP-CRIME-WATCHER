import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb: FormBuilder) {
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
    }
  }
  
  isFieldValid(field: string) {
    return(
      this.userForm.get(field).invalid && (this.userForm.get(field).dirty || this.userForm.get(field).touched)
    )
  }
}
