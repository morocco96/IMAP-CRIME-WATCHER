import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css']
})
export class ActionModalComponent implements OnInit {
    actionForm:FormGroup;
  constructor(private modalCtrl: ModalController,
              private fb: FormBuilder) {

                this.actionForm = this.fb.group({
                  status: [''],
                  remark: ['']
                })
              }

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
