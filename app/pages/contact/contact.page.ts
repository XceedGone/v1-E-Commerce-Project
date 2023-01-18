import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  
})
export class ContactPage {

  inputVal: string =" ";
  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController) { }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async showAlert()
  {
    const alert = await this.alertCtrl.create({
      cssClass: 'sendAlert',
      header: 'Message Sent!',
      message: '<img src="/assets/check.png" class="imgAlert">',
      buttons: ['Ok']
    });

    await alert.present();
    this.inputVal = null;
  }

  clear(){
    this.inputVal = null;
  }

}





