import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerInventaryPage } from './seller-inventary.page';

const routes: Routes = [
  {
    path: '',
    component: SellerInventaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerInventaryPageRoutingModule {}
