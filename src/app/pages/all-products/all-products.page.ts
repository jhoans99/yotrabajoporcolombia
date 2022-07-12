import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {

  showLogin: boolean = false;
  myCustomIcon = "/assets/icons/man.png";
  listProducts = []

  constructor(
    private nativeStorage: NativeStorage,
    private productsService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('userInfo').then(data =>{
      this.showLogin = false
   }).catch(err =>{
     this.showLogin = true
   })
  }

  consultProducts(){
    this.productsService.postConsultAllProducts().then(data=>{
      let respose = JSON.parse(data.data)
      if(respose.mensaje == "CONSULTA EXITOSA"){
        this.listProducts = respose.info
      } 
    }).catch(err=>{

    })
  }

  goToDetailProduct(item: any){
    //this.navCtrl.navigateForward('/detail-product')
    this.router.navigate(['/detail-product'],{
      queryParams: item
    });
  }

}
