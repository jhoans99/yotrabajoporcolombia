import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerInventaryPageRoutingModule } from './seller-inventary-routing.module';

import { SellerInventaryPage } from './seller-inventary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerInventaryPageRoutingModule
  ],
  declarations: [SellerInventaryPage]
})
export class SellerInventaryPageModule {}
