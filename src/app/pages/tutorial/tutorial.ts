import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {

  constructor(
   
    public router: Router,

  ) {
  
     setTimeout(() => {
         this.router.navigate(['/login'])
        },5000)
  }

  
}
