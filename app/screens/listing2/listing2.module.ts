import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Listing2PageRoutingModule } from './listing2-routing.module';
import { Listing2Page } from './listing2.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listing2PageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [Listing2Page]
})
export class Listing2PageModule {}
