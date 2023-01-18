import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage{

  constructor(private modalCtrl: ModalController) { }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
