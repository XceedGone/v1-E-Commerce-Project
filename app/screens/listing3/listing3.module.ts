import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Listing3PageRoutingModule } from './listing3-routing.module';
import { Listing3Page } from './listing3.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listing3PageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [Listing3Page]
})
export class Listing3PageModule {}
