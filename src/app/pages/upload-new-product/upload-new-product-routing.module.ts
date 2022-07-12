import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadNewProductPage } from './upload-new-product.page';

const routes: Routes = [
  {
    path: '',
    component: UploadNewProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadNewProductPageRoutingModule {}
