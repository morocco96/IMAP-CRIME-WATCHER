import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-view-user-modal',
  templateUrl: './view-user-modal.component.html',
  styleUrls: ['./view-user-modal.component.css']
})
export class ViewUserModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }
  name: string;

 

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
