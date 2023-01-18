import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPage2PageRoutingModule } from './tab-page2-routing.module';

import { TabPage2Page } from './tab-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPage2PageRoutingModule
  ],
  declarations: [TabPage2Page]
})
export class TabPage2PageModule {}
