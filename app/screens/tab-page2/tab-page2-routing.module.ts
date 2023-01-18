import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage2Page } from './tab-page2.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage2Page,
    children: [
      {
        path: 'listing2',
        loadChildren: () =>
          import('../../screens/listing2/listing2.module').then(
            (m) => m.Listing2PageModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../../screens/cart/cart.module').then((m) => m.CartPageModule),
      },
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPage2PageRoutingModule {}
