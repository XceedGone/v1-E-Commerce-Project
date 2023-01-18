import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPage3PageRoutingModule } from './tab-page3-routing.module';

import { TabPage3Page } from './tab-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPage3PageRoutingModule
  ],
  declarations: [TabPage3Page]
})
export class TabPage3PageModule {}
