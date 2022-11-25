import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dark:boolean = false;
user
  setMode() {
    this.dark = !this.dark;
    console.log(this.dark)
  }
  

  appPages = [
    {
      title: 'Dashboard',
      url: '/users/apps/dashboard',
      icon: 'calendar'
    },
    {
      title: 'Create Complaint',
      url: '/users/apps/create-complaint',
      icon: 'people'
    },
    {
      title: 'Complaint History',
      url: '/users/apps/complaint-history',
      icon: 'map'
    }
  
  ];
  loggedIn = true;




  constructor(private router: Router,
    private userSvc:UserService,
              private dataService:DataService) {
                this.user=userSvc.userDetail
              }

  ngOnInit(){
   this.setDarkMode()
  }
  openTutorial() {
    this.router.navigateByUrl('/tutorial');
  }

  setDarkMode() {
    this.dataService.setDarkMode(this.dark);
  }

  

}
