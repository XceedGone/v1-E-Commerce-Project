import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage3Page } from './tab-page3.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage3Page,
    children: [
      {
        path: 'listing3',
        loadChildren: () =>
          import('../../screens/listing3/listing3.module').then(
            (m) => m.Listing3PageModule
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
export class TabPage3PageRoutingModule {}
