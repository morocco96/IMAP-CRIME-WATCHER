import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pending-complaints',
  templateUrl: './pending-complaints.component.html',
  styleUrls: ['./pending-complaints.component.css']
})
export class PendingComplaintsComponent implements OnInit {

  reports:any
  constructor(private  dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStaffReports().subscribe(res => {
      this.reports = res;
    })
  }

}
