import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHistorySellerPage } from './modal-history-seller.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHistorySellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHistorySellerPageRoutingModule {}
