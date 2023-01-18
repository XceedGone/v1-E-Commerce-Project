import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagePage } from './home-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: 'listing',
        loadChildren: () =>
          import('../../screens/listing/listing.module').then(
            (m) => m.ListingPageModule
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

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
