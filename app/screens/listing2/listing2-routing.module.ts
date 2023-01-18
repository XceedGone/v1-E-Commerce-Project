import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listing2Page } from './listing2.page';

const routes: Routes = [
  {
    path: '',
    component: Listing2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listing2PageRoutingModule {}
