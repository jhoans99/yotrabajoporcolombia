import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHistorySellerPageRoutingModule } from './modal-history-seller-routing.module';

import { ModalHistorySellerPage } from './modal-history-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHistorySellerPageRoutingModule
  ],
  declarations: [ModalHistorySellerPage]
})
export class ModalHistorySellerPageModule {}
