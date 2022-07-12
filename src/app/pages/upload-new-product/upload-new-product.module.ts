import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadNewProductPageRoutingModule } from './upload-new-product-routing.module';

import { UploadNewProductPage } from './upload-new-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadNewProductPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UploadNewProductPage]
})
export class UploadNewProductPageModule {}