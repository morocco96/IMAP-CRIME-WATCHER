import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-pending-complaint-detail',
  templateUrl: './pending-complaint-detail.component.html',
  styleUrls: ['./pending-complaint-detail.component.css']
})
export class PendingComplaintDetailComponent implements OnInit {

  report:any;
  id:any;
  constructor(private route:ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStaffReport();
  }

  getStaffReport() {
    this.dataService.getStaffReport(this.id).subscribe(res => {
      this.report = res;
      console.log(res);
    })
  }
}
