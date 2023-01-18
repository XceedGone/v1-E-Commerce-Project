import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./pages/about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'devs',
    loadChildren: () => import('./pages/devs/devs.module').then( m => m.DevsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./screens/listing/listing.module').then((m) => m.ListingPageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'detail2/:id',
    loadChildren: () =>
      import('./screens/detail2/detail2.module').then((m) => m.Detail2PageModule),
  },
  {
    path: 'detail3/:id',
    loadChildren: () =>
      import('./screens/detail3/detail3.module').then((m) => m.Detail3PageModule),
  },
  {
    path: 'home-page',
    loadChildren: () => import('./screens/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'listing2',
    loadChildren: () => import('./screens/listing2/listing2.module').then( m => m.Listing2PageModule)
  },
  {
    path: 'listing3',
    loadChildren: () => import('./screens/listing3/listing3.module').then( m => m.Listing3PageModule)
  },
  {
    path: 'aboutprod',
    loadChildren: () => import('./pages/aboutprod/aboutprod.module').then( m => m.AboutprodPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'tab-page2',
    loadChildren: () => import('./screens/tab-page2/tab-page2.module').then( m => m.TabPage2PageModule)
  },
  {
    path: 'tab-page3',
    loadChildren: () => import('./screens/tab-page3/tab-page3.module').then( m => m.TabPage3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
