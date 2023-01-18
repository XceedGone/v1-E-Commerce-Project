import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listing3Page } from './listing3.page';

const routes: Routes = [
  {
    path: '',
    component: Listing3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listing3PageRoutingModule {}
