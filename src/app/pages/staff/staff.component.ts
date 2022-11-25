import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  dark: boolean = false;
  user
  setMode() {
    this.dark = !this.dark;
    console.log(this.dark)
  }
  constructor(
    private router: Router,
    private userSvc: UserService,
    private dataService: DataService) {
    this.user = userSvc.userDetail
  }

  ngOnInit(): void {
    this.setDarkMode()
  }
  setDarkMode() {
    this.dataService.setDarkMode(this.dark);
  }
  appPages = [
    {
      title: 'Dashboard',
      url: '/staff/apps/dashboard',
      icon: 'calendar'
    },
    {
      title: 'Pending Complaint',
      url: '/staff/apps/pending-complaint',
      icon: 'people'
    },
    {
      title: 'Closed Complaints',
      url: '/staff/apps/closed-complaint',
      icon: 'map'
    }

  ];


  openTutorial() {
    this.router.navigateByUrl('/tutorial');
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
