import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from 'src/app/services/cart.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  public categories =[];
  public products =[];
  public prod =[];
  cart = [];
  items = []; 

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView : 1.6
  }

  constructor(
    private data: DataService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.products = this.data.getProducts();
    this.prod = this.data.getProd();
   
  }

}
