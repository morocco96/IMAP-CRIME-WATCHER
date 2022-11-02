import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any;

  constructor(private dataServce: DataService) { }

  ngOnInit(): void {
    this.dataServce.getUser().subscribe(res => {
      this.users = res;
    })
  }

}
