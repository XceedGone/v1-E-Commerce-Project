import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Detail3PageRoutingModule } from './detail3-routing.module';
import { Detail3Page } from './detail3.page';
import { BadgeModule } from 'src/app/components/badge/badge.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeModule,
    ButtonModule,
    Detail3PageRoutingModule
  ],
  declarations: [Detail3Page]
})
export class Detail3PageModule {}
