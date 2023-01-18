import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from 'src/app/services/cart.service';
import {Router } from '@angular/router';
import Swiper, { SwiperOptions, Autoplay, Pagination, EffectCards } from 'swiper';
import { AlertController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public swiperConfig : SwiperOptions = {
    pagination: true,
    loop: true,
    slidesPerView: 'auto',
    effect: 'creative',
    autoplay: {
      delay: 3000,
    },
    
  }

  images =[
    './assets/banner.jpg',
    './assets/2banner.jpg',
    './assets/3banner.jpg',
    './assets/4banner.jpg',
    './assets/5banner.jpg',
  ];


  public categories =[];
  public products =[];
  public prod =[];
  cart = [];
  items = [];

  constructor(
    private data: DataService,
    private router: Router,
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.products = this.data.getProducts();
    this.prod = this.data.getProd();
    Swiper.use([Pagination, Autoplay, EffectCards]);  
   
  }
  
  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
