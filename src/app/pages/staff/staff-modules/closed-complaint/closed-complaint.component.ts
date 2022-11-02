import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-closed-complaint',
  templateUrl: './closed-complaint.component.html',
  styleUrls: ['./closed-complaint.component.css']
})
export class ClosedComplaintComponent implements OnInit {
  reports:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStaffClosed().subscribe(data => {
      this.reports = data;
    })
  }

}
