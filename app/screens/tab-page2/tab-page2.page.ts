import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from 'src/app/services/cart.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-tab-page2',
  templateUrl: './tab-page2.page.html',
  styleUrls: ['./tab-page2.page.scss'],
})
export class TabPage2Page implements OnInit {

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
