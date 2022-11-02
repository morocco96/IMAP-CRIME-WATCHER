import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
 
  dark:boolean = false;

  setMode() {
    this.dark = !this.dark;
    console.log(this.dark)
  }
  constructor(private dataService:DataService,
              private router:Router) { }

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
