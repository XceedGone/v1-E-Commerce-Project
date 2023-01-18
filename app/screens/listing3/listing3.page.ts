import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { Food3Service } from 'src/app/services/food3.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import {ModalController} from '@ionic/angular';
import { Detail3Page } from '../detail3/detail3.page';

@Component({
  selector: 'app-listing2',
  templateUrl: './listing3.page.html',
  styleUrls: ['./listing3.page.scss'],
})
export class Listing3Page implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];
  id: number;
  food3: Food;

  constructor(
    private food3Service: Food3Service,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private modalController: ModalController
    ) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.getCategories();
    this.foods = this.food3Service.getFoods();
    this.food3 = this.food3Service.getFood(this.id);
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/images/icons/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Burgers',
        image: 'assets/images/icons/burger.png',
        active: false,
      },
      {
        id: 3,
        label: 'Dishes',
        image: 'assets/images/icons/dish.png',
        active: false,
      },
      {
        id: 4,
        label: 'Sushi',
        image: 'assets/images/icons/sushi.png',
        active: false,
      },
    ];
  }

  goToDetailPage(id: number) {
  /*  this.modalController.create({component: DetailPage }).then((modalElement)=>{
      modalElement.present();
    }) */
    this.router.navigate(['detail3', id]);
    

  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food3.id,
      name: this.food3.title,
      price: this.food3.price,
      image: this.food3.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
    
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Food added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}

