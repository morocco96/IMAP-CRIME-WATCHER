import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './pages/services/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
 
dark;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.darkMode.subscribe(res => {
      this.dark = res;
    })
  }

  

}
