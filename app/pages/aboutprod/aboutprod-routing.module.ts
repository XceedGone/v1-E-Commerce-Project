import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutprodPage } from './aboutprod.page';

const routes: Routes = [
  {
    path: '',
    component: AboutprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutprodPageRoutingModule {}
