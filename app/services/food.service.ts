import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Caramilk',
        price: 80,
        image: 'assets/images/foods/caramilk.jpg',
        description:
        'A uniquely crafted golden white chocolate made from 100% sustainable cocoa, with a smooth, silky texture and delicious caramel taste.',
        ingredients: 'Sugar, cocoa butter, caramelised MILK powder [skimmed MILK powder, whey powder (from MILK), sugar, BUTTER, natural flavouring], whey powder (from MILK), skimmed MILK powder, MILK fat, emulsifier (SOYA lecithins).',
        diet: 'MAY CONTAIN NUTS, WHEAT',
        brand: 'Cadbury'
      },

      {
        id: 2,
        title: 'Chokito',
        price: 80,
        image: 'assets/images/foods/chokito.jpg',
        description:
        'Say YES to the good stuff. Bite into Chokito Milk Chocolate Bar - chewy caramel fudge centre, crunchy, crispy balls and loads of delicious milk chocolate.',
        ingredients: 'Sugar, Sweetened Condensed Milk ( Milk , Sugar), Glucose Syrup, Milk Solids, Vegetable Fat [Emulsifiers (492, Soy Lecithin)], Choc Cereal Balls (5%) [ Wheat Flour, Maize Flour, Sugar, Cocoa, Salt], Cocoa Butter, Cocoa Mass, Humectant (420), Fondant ( Wheat ), Cocoa, Treacle, Emulsifiers ( Soy Lecithin, 476), Salt, Flavours.',
        diet: 'Contains Gluten, May Be Present Tree Nuts, Contains Soy, Contains Milk, Contains Wheat',
        brand: 'Nestle'
      },

      {
        id: 3,
        title: 'KitKat',
        price: 90,
        image: 'assets/images/foods/chunky.jpg',
        description:
        'Break off a piece of the iconic KitKat Chunky Milk Chocolate Bar when you next need a bigger, bolder break. Just unwrap, snap and enjoy the deliciously smooth milk chocolate.',
        ingredients: 'Sugar, Full Cream Milk Powder, Wheat Flour, Cocoa Butter, Vegetable Fat [Emusifier ( Soy Lecithin)], Cocoa Mass, Cocoa, Glucose Syrup, Emusifiers ( Soy Lecithin, 476), Yeast, Raising Agent (Sodium Bicarbonate), Salt, Flavours. Contains Milk, Soy and Wheat. ',
        diet: 'Contains Gluten, May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean',
        brand: 'Nestle'
      },
      {
        id: 4,
        title: 'Crunchie',
        price: 80,
        image: 'assets/images/foods/crunchie.jpg',
        description:
        'A chunky, gold bar of delicious honeycomb, smothered in thick Cadbury milk chocolate that shatters into mouth-watering crunchy pieces.',
        ingredients: 'Sugar, glucose syrup, cocoa butter, cocoa mass, skimmed MILK powder, whey permeate powder (from MILK), palm oil, MILK fat, emulsifier (E442), flavourings, coconut oil.',
        diet: 'May Be Present Tree Nuts, Contains Soy, May Be Present Peanuts, Contains Milk, May Be Present Wheat',
        brand: 'Cadbury'
      },
      {
        id: 5,
        title: 'Dairy Milk',
        price: 75,
        image: 'assets/images/foods/dairymilk.jpg',
        description:
        'Classic bar of deliciously creamy Cadbury Dairy Milk milk chocolate, made with fresh milk from the British Isles and Ireland. A mouthful of “mmmm” in every piece!',
        ingredients: 'Full Cream Milk, Sugar, Cocoa Butter, Cocoa Mass, Milk Solids, Emulsifiers (Soy Lecithin, 476), Flavours.',
        diet: 'MAY CONTAIN NUTS, WHEAT.',
        brand: 'Cadbury'
      },
      {
        id: 6,
        title: 'Mars',
        price: 30,
        image: 'assets/images/foods/mars.jpg',
        description:
        'When you need a big, bold dose of chocolate positivity, reward yourself with a MARS bar. With the legendary taste of soft nougat, slathered in caramel and covered in thick milk chocolate, MARS chocolate bars have enough chocolate to deal with anything!',
        ingredients: 'Sugar, Glucose Syrup (Sources include Wheat), Milk Solids, Cocoa Mass, Cocoa Butter, Vegetable Oil, Vegetable Fat, Barley Malt Extract, Emulsifier (Soy Lecithin), Salt, Egg White, Natural Flavour (Vanilla Extract).',
        diet: 'May Be Present Tree Nuts, Contains Barley, Contains Soy, May Be Present Peanuts, Contains Milk, Contains Egg, Contains Wheat',
        brand: 'Mars'
      },
      {
        id: 7,
        title: 'Perky Nana',
        price: 70,
        image: 'assets/images/foods/perkynana.jpg',
        description:
        'Cadbury Perky Nana, a banana flavoured chew bar covered with delicious milk chocolate. ',
        ingredients: 'Sugar, Glucose Syrup, invert Sugar, Milk Solids, Cocoa Butter, Cocoa Mass, Maltodextrin, Gelatine, Colour (E100), Hydrolised Milk Protein, Food Acid (E330), Flavours, Emulsifiers (Soy Lecithin, E476), Cornstarch.',
        diet: 'Contains Milk',
        brand: 'Cadbury'
      },
      {
        id: 8,
        title: 'Pixie',
        price: 80,
        image: 'assets/images/foods/pixie.jpg',
        description:
        'The original Pixie Caramel with the longer-lasting chew! Another New Zealand favourite, a gorgeous filling of chewy caramel coated in delicious dark chocolate.',
        ingredients: 'Sugar, Vegetable Fat [Emulsifiers (Soy Lecithin, 492)], Cocoa, Glucose Syrup (Derived From Wheat or Corn), Sweetened Condensed Milk (Milk Sugar), Whey Powder (Milk), Cocoa Mass, Cocoa Butter, Emulsifiers (471, 476), Salt, Flavours [Colour (150D)].',
        diet: 'May Contain Tree Nuts, Contains Soy, Contains Milk, Contains Wheat',
        brand: 'Nestle'
      },
      {
        id: 9,
        title: 'Snickers',
        price: 40,
        image: 'assets/images/foods/snickers.jpg',
        description:
        'Game nights. Bush hikes. Long commutes. Threethirtyitis. Youre Not You When Youre Hungry. And youre not hungry if you have a satisfying SNICKERS chocolate snack to hand.',
        ingredients: 'Sugar, Peanuts, Glucose Syrup (Sources Include Wheat), Milk Solids, Cocoa Butter, Cocoa Mass, Vegetable Fat, Salt, Emulsifier (Soy Lecithin), Egg White, Flavour.',
        diet: 'May Be Present Tree Nuts, Contains Soy, Contains Milk, Contains Egg, Contains Peanuts, Contains Wheat',
        brand: 'Mars'
      },
      {
        id: 10,
        title: 'Twix',
        price: 50,
        image: 'assets/images/foods/twix.jpg',
        description:
        'TWIX chocolate bars are cloaked in delicious, flowing milk chocolate, with every stick a little different. Every bite of a TWIX chocolate bar delivers the perfect contrasting mix of gooey caramel and crunchy biscuit.',
        ingredients: 'Sugar, Flour (Sources Include Wheat), Glucose Syrup (Sources Include Wheat), Milk Solids, Vegetable Fat, Cocoa Butter, Cocoa Mass, Glucose, Cocoa Powder, Emulsifier (Soy Lecithin), Salt, Natural Flavour (Vanilla Extract).',
        diet: 'Kosher and Halal, Contains Soy, Contains Milk, Contains Wheat.',
        brand: 'Mars'
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
