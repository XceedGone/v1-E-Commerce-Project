import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class Food2Service {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Aero',
        price: 200,
        image: 'assets/images/foods/aero.jpg',
        description:
        'Feel the bubbles melt as you bite into Aero Caramel Gold Milk Chocolate Block. Discover delicately light bubbles of caramel choc covered in smooth milk chocolate. Made with 100% certified sustainable cocoa, supplied through the Nestle Cocoa Plan.',
        ingredients: 'Ingredients Sugar, Milk Solids, Vegetable Fat [Emulsifier ( Soy Lecithin)], Cocoa Butter^, Cocoa Mass^, Emulsifiers ( Soy Lecithin, 476), Glucose, Flavours. Contains Milk, Soy. May Contain Tree Nuts, Gluten Containing Ingredients. Milk Chocolate Contains 22% Cocoa Solids and 25% Milk Solids.',
        diet: 'May Contain Gluten, May Contain Tree Nuts, Contains Milk, Contains Soybean',
        brand: 'Aero'
      },
      {
        id: 2,
        title: 'Belgian Dark',
        price: 350,
        image: 'assets/images/foods/belgiandark.jpg',
        description:
        'Dark chocolate connoisseurs, enjoy this delicious dark bar with 85 percent of cocoa. ',
        ingredients: 'Cocoa mass, Sugar, Emulsifier: Lecithins; Cocoa butter.',
        diet: 'MAY CONTAIN TRACES OF: GLUTEN, MILK, NUTS AND SOYA.',
        brand: 'The Belgian'
      },
      {
        id: 3,
        title: 'Belgian Milk',
        price: 350,
        image: 'assets/images/foods/belgianmilk.jpg',
        description:
        'Seize the day without feeling guilty with these Milk Chocolate Reduced Sugars* Bar. Reduced sugars bars are developed for diet-conscious customers.',
        ingredients: 'Sweetener: Maltitol 42%; Cocoa butter, Full cream MILK powder, Cocoa mass, Emulsifier: Lecithins; flavour.',
        diet: 'MAY CONTAIN TRACES OF: GLUTEN, SOYA AND NUTS.',
        brand: 'The Belgian'
      },
      {
        id: 4,
        title: 'Caramello',
        price: 150,
        image: 'assets/images/foods/caramello.jpg',
        description:
        'CARAMELLO Milk Chocolate Bars are made with Cadburys famously rich and creamy milk chocolate and filled with a deliciously smooth caramel center.',
        ingredients: 'Full Cream Milk, Sugar, Cocoa Butter, Glucose Syrup, Milk Solids, Cocoa Mass, Sweetened Condensed Milk (Milk, Sugar), Golden Syrup, Invert Sugar, Vegetable Fat, Emulsifiers (Soy Lecithin, 476), Salt, Acidity Regulator (331), Flavours.',
        diet: 'May Be Present Tree Nuts, Contains Soy, May Be Present Peanuts, Contains Milk, May Be Present Wheat.',
        brand: 'Cadbury'
      },
      {
        id: 5,
        title: 'Caramilk',
        price: 150,
        image: 'assets/images/foods/caramilkb.jpg',
        description:
        'A uniquely crafted golden white chocolate made from 100% sustainable cocoa, with a smooth, silky texture and delicious caramel taste.',
        ingredients: 'Sugar, cocoa butter, caramelised MILK powder [skimmed MILK powder, whey powder (from MILK), sugar, BUTTER, natural flavouring], whey powder (from MILK), skimmed MILK powder, MILK fat, emulsifier (SOYA lecithins).',
        diet: 'MAY CONTAIN NUTS, WHEAT',
        brand: 'Cadbury'
      },
      {
        id: 6,
        title: 'KitKat',
        price: 100,
        image: 'assets/images/foods/kitkat.jpg',
        description:
        'Unwrap, break off a finger, snap it in two and savour the crispy wafer finger covered in deliciously smooth milk chocolate, ideal for a break at home or work.',
        ingredients: 'Sugar, Wheat Flour (contains Calcium, Iron, Thiamin and Niacin), Milk Powders (Whole and Skimmed), Cocoa Mass, Cocoa Butter, Vegetable Fats (Palm, Shea, Mango Kernel, Sal), Lactose and Proteins from Whey (from Milk), Whey Powder (from Milk), Butterfat (from Milk), Emulsifier (Lecithins), Yeast, Raising Agent (Sodium Bicarbonate), Natural Flavourings',
        diet: 'Suitable for Vegetarians, Contains Milk, No Artificial Colours, No Artificial Flavours, No Artificial Preservatives.',
        brand: 'Nestle'
      },
      {
        id: 7,
        title: 'KitKat Dark',
        price: 120,
        image: 'assets/images/foods/kitkatdark.jpg',
        description:
        'Discover Dark Down Under! Discover the indulgent dark chocolate experience of KitKat Dark with Yorke Peninsula Sea Salt & Caramel. Just unwrap, snap off a finger and savour the delectable combination of caramel, salt & rich dark chocolate.',
        ingredients: 'Sugar, Cocoa Mass^, Whea T Flour, Vegetable Fat [Emulsifier (Soy Lecithin)], Milk Solids, Choc Paste ( Milk, Wheat, Soy ), Caramelised Sugar (0.7%), Emulsifiers ( Soy Lecithin, 476), Cocoa^, Cocoa Butter^, Salt (0.2%), Flavour [Colour (150d)]), Raising Agent (Sodium Bicarbonate) Yeast. Contains Milk, Wheat and Soy. May Contain Tree Nuts',
        diet: 'May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean.',
        brand: 'Nestle'
      },
      {
        id: 8,
        title: 'KitKat Gold',
        price: 200,
        image: 'assets/images/foods/kitkatgold.jpg',
        description:
        'Caramelise your break! Break into KitKat Gold Choc Block to discover a different way to break. Just unwrap, snap and savour the delicious gold choc. 11 crisp batch baked wafer fingers, smothered in deliciously creamy gold choc with a caramelised taste.',
        ingredients: 'Sugar, Vegetable Fat [Emulsifier ( Soy Lecithin) Milk Soilds, Wheat Flour, Choc Paste ( Milk , Wheat, Soy ), Emulsifier ( Soy Lecithin, 476), Cocoa, Flavour, Glucose, Yeast, Raising Agent (Sodium Bicarbonate), Salt, Cocoa Butter, Cocoa Mass. Contains Milk, Wheat and Soy. May Contain Tree Nuts. Product Contain 76% Caramel Flavoured White Choc and 24% Wafer Fingers.',
        diet: 'May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean.',
        brand: 'Nestle'
      },
      {
        id: 9,
        title: 'Milkybar',
        price: 150,
        image: 'assets/images/foods/milkybar.jpg',
        description:
        'Fall in love with the creamy caramelised taste of Milkybar Gold - deliciously smooth golden white choc that is as good as gold! Enjoy a piece of Milkybar Gold Choc and savour the gold standard in caramelised taste.',
        ingredients: 'Sugar, Milk Solids (30%), Vegetable Fat [Emulsifier ( Soy Lecithin)], Emulsifiers ( Soy Lecithin, 476), Glucose, Flavour.',
        diet: 'Contains Milk and Soy. May Contain Tree Nuts and Gluten Containing Ingredients.',
        brand: 'Nestle'
      },
      {
        id: 10,
        title: 'Rolo',
        price: 150,
        image: 'assets/images/foods/rolo.jpg',
        description:
        'Savour a piece of the deliciously smooth and creamy Nestle Rolo Chocolate Block. Decadent milk chocolate cups filled with oozing, gooey caramel make for an indulgent treat sure to leave you satisfied.',
        ingredients: 'Sugar, Milk Solids, Cocoa Butter^, Invert Sugar, Sweetened Condensed Milk ( Milk , Sugar), Vegetable Fat [Emulsifier ( Soy Lecithin)], Cocoa Mass^, Glucose Syrup, Emulsifiers ( Soy Lecithin, 476), Salt, Flavour. Contains Milk and Soy. May Contain Tree Nuts and Gluten Containing Ingredients. Product Contains 75% Milk Chocolate and 25% Caramel. Milk Chocolate Contains Minimum 22% Cocoa Solids and 25% Milk Solids.',
        diet: 'May Contain Gluten, May Contain Wheat, May Contain Tree Nuts, Contains Milk, Contains Soybean',
        brand: 'Nestle'
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food2) => food2.id === id);
  }
}
