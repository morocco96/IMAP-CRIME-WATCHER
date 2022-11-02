import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pending-complaint',
  templateUrl: './pending-complaint.component.html',
  styleUrls: ['./pending-complaint.component.css']
})
export class PendingComplaintComponent implements OnInit {
    reports:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAdminPendingComplaint().subscribe(res => {
      this.reports = res;
    })
  }

}
