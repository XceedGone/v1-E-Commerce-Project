import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController) { }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }
}
