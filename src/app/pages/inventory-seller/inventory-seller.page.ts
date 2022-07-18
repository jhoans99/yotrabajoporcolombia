import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-inventory-seller',
  templateUrl: './inventory-seller.page.html',
  styleUrls: ['./inventory-seller.page.scss'],
})
export class InventorySellerPage implements OnInit {

  showLogin: boolean = false;
  
  myCustomIcon = "/assets/icons/man.png";

  constructor(
    public productsService: ProductService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.consultProductsBySeller(res.idUser)
    });
    
  }

  consultProductsBySeller(idUser: string){
    this.productsService.postConsultProductsBySeller(idUser).subscribe((data: any) =>{
      console.log(JSON.stringify(data))
    })
  }

}
