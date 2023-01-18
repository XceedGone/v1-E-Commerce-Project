import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class Food3Service {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Celebrations',
        price: 550,
        image: 'assets/images/foods/celeb.jpg',
        description:
          'Mars Celebrations are the first mixed box of chocolates to bring together branded confectioneries as: Mars, Bounty,  Snickers, Dove / Galaxy, Dove Caramel / Galaxy Caramel,  Twix, Maltesers, Milky Way',
        ingredients: 'Sugar, Glucose Syrup, Cocoa Butter, Skimmed Milk Powder, Cocoa Mass, Milk Fat, Lactose, Palm Fat, Peanuts, Desiccated Coconut, Whey Powder (from Milk), Wheat Flour, Sunflower Oil, Full Cream Milk Powder, Emulsifiers (Soya Lecithin, E471), Barley Malt Extract, Fat Reduced Cocoa, Salt, Humectant (Glycerol), Egg White Powder, Natural Vanilla Extract, Raising Agents (E341, E500, E501), Milk Protein, Wheat Gluten, Milk Chocolate contains Milk Solids 14% minimum and Cocoa Solids 25% minimum',
        diet: 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.',
        brand: 'Mars'
      },
      {
        id: 2,
        title: 'Favourites',
        price: 500,
        image: 'assets/images/foods/favourits.jpg',
        description:
          'Cadbury Favourites brings together all your favourite Cadbury products so that Everyone Gets Their Favourites! Cadbury Favourites contains: Cadbury Dairy Milk, Cadbury Dairy Milk Caramello, Cadbury Dream, Cadbury Old Gold, Cadbury Flake, Cadbury Crunchie, Cadbury Picnic, Cadbury Boost, Cadbury Moro, Cadbury Cherry Ripe, Frys Turkish Delight.',
ingredients: 'SUGAR, GLUCOSE SYRUP, COCOA BUTTER, MILK SOLIDS, FULL CREAM MILK, COCOA MASS, SWEETENED CONDENSED MILK, VEGETABLE FAT, PEANUTS PIECES, INVERT SUGAR, WHEAT FLOUR, BISCUIT (CONTAINS WHEAT FLOUR), GOLDEN SYRUP, COCOA POWDER, EMULSIFIERS (SOY LECITHIN, 476, 471, 492, SUNFLOWER LECITHIN), THICKENER (1401), MALT EXTRACT (FROM BARLEY), HUMECTANT (422), RICE CRISPS, VEGETABLE GUM (440), SALT, RAISING AGENTS (500, 575), HYDROLYSED MILK PROTEIN, MALTODEXTRIN, ACIDITY REGULATOR (331), FLAVOURS, COLOURS (163,150c), GELLING AGENT (575), VEGETABLE OIL, CORNSTARCH, ANTIOXIDANT (319) MILK CHOCOLATE CONTAINS COCOA SOLIDS 26%, MILK SOLIDS MINIMUM 24%.',
        diet: 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.',
        brand: 'Cadbury'
      },
      {
        id: 3,
        title: 'Ferrero Rocher',
        price: 600,
        image: 'assets/images/foods/ferrero.jpg',
        description:
          'Whole hazelnut in milk chocolate and nut croquante, a perfect gift to share with your loved ones. Ferrero Rocher offers a delicious taste experience due to its unique combination of layers and textures. A whole hazelnut surrounded by delicious layers of crispy wafer, a velvety filling, smooth milk chocolate and finely chopped hazelnut pieces.',
        ingredients:'Milk Chocolate 30% (Sugar, Cocoa Butter, Cocoa Mass, Skimmed Milk Powder, Concentrated Butter, Emulsifier: Lecithins (Soya), Vanillin), Hazelnuts (28.5%), Sugar, Palm Oil, Wheat Flour, Whey Powder (Milk), Fat-Reduced Cocoa, Emulsifier: Lecithins (Soya), Raising Agent (Sodium Bicarbonate), Salt, Vanillin',
        diet: 'Suitable for Vegetarians, Contains Hazelnuts, Contains Milk, Contains Soya, Contains Wheat.',
        brand: 'Ferrero'
      },
      {
        id: 4,
        title: 'Kisses Milk Chocolate',
        price: 450,
        image: 'assets/images/foods/kisses.jpg',
        description:
          'The iconic shape, festive foil wrappers and classic taste of HERSHEYS KISSES Milk Chocolate make them perfect for sharing and savoring. Use HERSHEYS KISSES Milk Chocolates in your favorite recipes, in your everyday candy dish and at your next party or family gathering.',
        ingredients:'Milk Chocolate (Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin, Natural Flavor)',
        diet: 'Contains: Soy, Milk',
        brand: 'Hershey'
      },
      {
        id: 5,
        title: 'Maltesers',
        price: 550,
        image: 'assets/images/foods/maltesers.jpg',
        description:
          'Now you can share the lighter way to enjoy EVEN MORE chocolate with this medium share bag of melt-in-the-mouth MALTESERS, featuring crisp malt centres covered with LOTS MORE delicious milk chocolate. Perfect for movie nights and get-togethers!',
        ingredients: 'Sugar, Skimmed Milk Powder, Cocoa Butter, Glucose Syrup, Barley Malt Extract, Cocoa Mass, Palm Fat, Lactose and Protein from Whey (from Milk), Emulsifiers (Soya Lecithin, E492), Wheat Flour, Palm Kernel Fat, Palm Kernel Oil, Raising Agents (E341, E500, E501), Wheat Gluten, Salt, Glazing Agent (Pectins), Natural Vanilla Extract, Milk Chocolate contains Milk Solids 14% minimum, Milk Chocolate contains Vegetable Fats in addition to Cocoa Butter',
        diet: 'Kosher, Suitable for Vegetarians, Contains Barley, Contains Milk, Contains Soya, Contains Wheat.',
        brand: 'Mars'
      },
      {
        id: 6,
        title: 'MatchMakers',
        price: 450,
        image: 'assets/images/foods/matchmakers.jpg',
        description:
          'Now you can share the lighter way to enjoy EVEN MORE chocolate with this medium share bag of melt-in-the-mouth MALTESERS, featuring crisp malt centres covered with LOTS MORE delicious milk chocolate. Perfect for movie nights and get-togethers!',
        ingredients: 'Sugar, Cocoa Mass, Glucose Syrup, Cocoa Butter, Skimmed Milk Powder, Lactose and Proteins from Whey (from Milk), Whey Powder (from Milk), Vegetable Fats (Mango Kernel, Palm, Sal, Shea), Emulsifier (Lecithins), Natural Peppermint Flavourings',
        diet: 'Suitable for Vegetarians, Contains Milk, No Artificial Colours, No Artificial Flavours, No Artificial Preservatives.',
        brand: 'Nestle'
      },
      {
        id: 7,
        title: 'Pergale',
        price: 650,
        image: 'assets/images/foods/pergale.jpg',
        description:
          'Perfect MILK chocolates for coffee, tea or own its own to experience the real luxury flavor of this chocolate delicacy. HIGH QUALITY chocolates bought and loved by lovers of luxury chocolate snacks. ',
        ingredients: 'Contains milk, soya, hazelnuts. May contain almonds, pistachios, cashew nuts, peanuts, wheat, eggs and their products., Milk Chocolate (Sugar, Cocoa Butter, Whole-Milk Powder, Cocoa Mass, Skimmed Milk Powder, Emulsifiers: Soy Lecithins, Polyglycerol Polyricinoleate, Sorbitan Tristearate, Artificial Flavor), Sugar Syrup (Sugar, Water), Palm and Palm Kernel Oil, Sugar, Glucose Syrup, Sweetened Condensed Milk, Whey Powder, Reduced Fat, Cocoa Powder, Caramelized Filling (Caramelized Glucose-Fructose Syrup, Caramelized Sweetened Condensed Milk, Coconut Oil, Humectant Glycerol, Emulsifier Soy Lecithins, Artificial Flavors), Chopped Hazelnuts, Humectant Glycerol, Mixture of Skimmed Milk and Whey Powder, Whole-Milk Powder, Emulsifiers: Soy Lecithins, Mono- and Diglycerides of Fatty Acids, Polyglycerol Polyricinoleate, Table Salt, Artificial Flavors, Preservative Potassium Sorbate.',
        diet: 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.',
        brand: 'Pergale'
      },
      {
        id: 8,
        title: 'Roses',
        price: 590,
        image: 'assets/images/foods/roses.jpg',
        description:
          'Cadbury Roses are a perfect way to say Thank You to family and friends. Featuring a delicious variety of popular flavours covered in our famous Cadbury chocolate. An assortment of Classic Milk, Hazelnut Creme Crisp, Vanilla Nougat, White Raspberry, Caramel Deluxe, Hazelnut Swirl, Turkish Delight, Classic Caramel, Peppermint Crème Crunch and Dark Mocha Nougat flavours.',
ingredients: 'SUGAR, MILK SOLIDS, GLUCOSE SYRUP, COCOA MASS, COCOA BUTTER, VEGETABLE FAT, SWEETENED CONDENSED MILK, INVERT SUGAR, COCOA POWDER, MALT EXTRACT (FROM BARLEY), HUMECTANT (422), CARAMELIZED HAZELNUTS (CONTAINS DEXTROSE (FROM WHEAT)), GOLDEN SYRUP, RICE CRISPS, EMULSIFIERS (SOY LECITHIN, 471, 476, 492, SUNFLOWER LECITHIN), HAZELNUTS, SALT, HYDROLYSED MILK PROTEIN, MALTODEXTRIN, FREEZE-DRIED RASPBERRIES, FLAVOURS, VEGETABLE GUM (440), ACIDITY REGULATORS (331, 330, 341), RAISING AGENTS (500), COLOURS (141, 160c, 150d), MINERAL SALT (450), VEGETABLE OIL, GLAZING AGENTS (904, 901), PEANUTS. MILK CHOCOLATE CONTAINS COCOA SOLIDS 27%, MILK SOLIDS MINIMUM 24%.',
        diet: 'CONTAINS MILK, HAZELNUTS, WHEAT, BARLEY, SOY, PEANUTS. MAY CONTAIN OTHER TREE NUTS.',
        brand: 'Cadbury'
      },
      {
        id: 9,
        title: 'Royal Thins',
        price: 700,
        image: 'assets/images/foods/royal.jpg',
        description:
          'The delicious Royal Thins Mango are filled with an irresistible mango cream covered with the finest dark chocolate.',
        ingredients: 'sugar, cocoa mass, glucose syrup, cocoa butter, water, natural flavour, invert sugar syrup, colouring food: carrot juice concentrate; Emulsifier: lecithin (sunflower); Humectant: Invertase; Acidulant: citric acid; Gelling agent: agar-agar; Salt',
        diet: 'May contain NUTS, PEANUTS, SOYA, DAIRY AND GRAIN',
        brand: 'Royal Chocolates'
      },
      {
        id: 10,
        title: 'Waikato',
        price: 700,
        image: 'assets/images/foods/waikato.jpg',
        description:
          'This packet of Scorched Almonds are brought to you from the lush green pastures of the Waikato plains.',
        ingredients: 'Dark Chocolate (87%) (Sugar, Cocoa Mass, Cocoa Butter, Emulsifiers (Soy Lecithin, 476), Flavour, Milk Solids), Roasted Almonds (13%), Glazing Agent (304)',
        diet: 'May contain Wheat, Peanuts and Other Tree Nuts, Contains Milk, Soy and Almonds',
        brand: 'Waikato'
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food3) => food3.id === id);
  }
}
