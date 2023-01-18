import { Injectable } from '@angular/core';

export interface ICategory {
  id: number,
  name: string,
  image: string,
}

export interface IProduct{
  id: number,
  name: string,
  price: number,
  image: string
}

export interface ISales{
  id: number,
  name: string,
  price: number,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 getCategories() {
    let categories = [];

    let cat1: ICategory={
      id: 1,
      name: 'Chocolate Bar',
      image: '../../assets/images/foods/bar.jpg'
    }
    let cat2: ICategory={
      id: 2,
      name: 'Chocolate Syrup',
      image: '../../assets/images/foods/syrup.jpg'
    }
    let cat3: ICategory={
      id: 3,
      name: 'Chocolate Ball',
      image: '../../assets/images/foods/ball.jpg'
    }
   
    categories.push(cat1, cat2,cat3);

    return categories;
  }  
  getProducts() {
    let products = [];

    let prod1: IProduct={
      id: 1,
      name: 'Maltesers',
      price: 100,
      image: '../../assets/images/foods/ferrero.jpg'
    }
    let prod2: IProduct={
      id: 2,
      name: 'Mars',
      price: 200,
      image: '../../assets/images/foods/mars.jpg'
    }
    let prod3: IProduct={
      id: 3,
      name: 'Roses',
      price: 50,
      image: '../../assets/images/foods/roses.jpg'
    }
    let prod4: IProduct={
      id: 4,
      name: 'Royal',
      price: 120,
      image: '../../assets/images/foods/royal.jpg'
    }

    products.push(prod1, prod2,prod3,prod4);

    return products;
  }

  getProd() {
    let prod = [];

    let prod1: ISales={
      id: 1,
      name: 'Maltesers',
      price: 100,
      image: '../../assets/images/foods/maltesers.jpg'
    }
    let prod2: ISales={
      id: 2,
      name: 'Twix',
      price: 200,
      image: '../../assets/images/foods/twix.jpg'
    }
    let prod3: ISales={
      id: 3,
      name: 'Waikato',
      price: 50,
      image: '../../assets/images/foods/waikato.jpg'
    }
    let prod4: ISales={
      id: 4,
      name: 'Kinder',
      price: 120,
      image: '../../assets/images/foods/kinder.jpg'
    }

    prod.push(prod1, prod2,prod3,prod4);

    return prod;
  }


}
