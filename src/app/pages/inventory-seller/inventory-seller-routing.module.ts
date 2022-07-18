import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventorySellerPage } from './inventory-seller.page';

const routes: Routes = [
  {
    path: '',
    component: InventorySellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventorySellerPageRoutingModule {}
