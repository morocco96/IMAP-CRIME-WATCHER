import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id:any;
  report:any;
  constructor(private route:ActivatedRoute,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params=> {
    this.id = params.get('id')
   })

    this.getReport(this.id);

  }


  getReport(id:any) {
   this.dataService.getReport(id).subscribe(res => {
     this.report = res
    console.log(res)
   })
  }

  removeReport() {
    this.dataService.removeReport(this.id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/users/apps/complaint-history'])

    })
  }



}
