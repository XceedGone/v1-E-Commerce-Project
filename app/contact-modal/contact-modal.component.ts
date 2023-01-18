import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent{

  constructor(private modalCtrl: ModalController) {}

   closeModal(){
     this.modalCtrl.dismiss();
   }
}
