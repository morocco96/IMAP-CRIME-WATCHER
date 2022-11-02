import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-closed-complaint-detail',
  templateUrl: './closed-complaint-detail.component.html',
  styleUrls: ['./closed-complaint-detail.component.css']
})
export class ClosedComplaintDetailComponent implements OnInit {
    report:any;
    id:any
  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getClosed();
  }

  getClosed() {
    this.dataService.getStaffClosedDetail(this.id).subscribe(res => {
      this.report = res;
      console.log(this.report);
    })
  }

}
