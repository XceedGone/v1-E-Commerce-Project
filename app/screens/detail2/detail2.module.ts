import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Detail2PageRoutingModule } from './detail2-routing.module';
import { Detail2Page } from './detail2.page';
import { BadgeModule } from 'src/app/components/badge/badge.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeModule,
    ButtonModule,
    Detail2PageRoutingModule
  ],
  declarations: [Detail2Page]
})
export class Detail2PageModule {}
