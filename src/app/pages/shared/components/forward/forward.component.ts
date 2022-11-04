import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.css']
})
export class ForwardComponent implements OnInit {

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
