import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutprodPageRoutingModule } from './aboutprod-routing.module';

import { AboutprodPage } from './aboutprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutprodPageRoutingModule
  ],
  declarations: [AboutprodPage]
})
export class AboutprodPageModule {}
