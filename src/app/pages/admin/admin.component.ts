import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  dark:boolean = false;

  setMode() {
    this.dark = !this.dark;
    console.log(this.dark)
  }
  
  
  appPages = [
    {
      title: 'Dashboard',
      url: '/admin/apps/dashboard',
      icon: 'calendar'
    },
    {
      title: 'Add Users',
      url: '/admin/apps/add-user',
      icon: 'people'
    },
    {
      title: 'Manage Users',
      url: '/admin/apps/manage-user',
      icon: 'map'
    },
    {
      title: 'Pending Complaints',
      url: '/admin/apps/pending-complaint',
      icon: 'speedometer'
    },
    {
      title: 'Closed Complaints',
      url: '/admin/apps/closed-complaint',
      icon: 'radio'
    }
  
  ];


  constructor(
    private dataService: DataService,
    private router: Router ) {}

    ngOnInit(){
      this.setDarkMode()
    }
 
    setDarkMode() {
      this.dataService.setDarkMode(this.dark);
    }

  openTutorial() {
    this.router.navigateByUrl('/tutorial');
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
