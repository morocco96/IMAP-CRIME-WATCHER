import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pending-complaint-detail',
  templateUrl: './pending-complaint-detail.component.html',
  styleUrls: ['./pending-complaint-detail.component.css']
})
export class PendingComplaintDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {

  }

}
