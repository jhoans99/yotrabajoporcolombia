import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventorySellerPageRoutingModule } from './inventory-seller-routing.module';

import { InventorySellerPage } from './inventory-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventorySellerPageRoutingModule
  ],
  declarations: [InventorySellerPage]
})
export class InventorySellerPageModule {}
