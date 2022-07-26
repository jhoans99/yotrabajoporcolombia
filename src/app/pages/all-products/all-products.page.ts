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
  listCategories = []
  filterCategoria : string = ""
  listWithOutFilter = []

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

   this.consultProducts()
  }

  consultProducts(){
    this.productsService.postConsultAllProducts().then(data=>{
      let respose = JSON.parse(data.data)
      if(respose.mensaje == "CONSULTA EXITOSA"){
        this.listProducts = respose.info
        this.listWithOutFilter = respose.info
        this.fillListCategories(this.listProducts)
      } 
    }).catch(err=>{

    })
  }

  fillListCategories(list: any[]){
    let categoriItem: string = ""
      list.forEach(element => {
        if(categoriItem != element.categorias){
          categoriItem = element.categorias
          this.listCategories.push({
            id: element.id,
            name: element.categorias
          })
        }
      });
  }

  filterList(){
    this.listProducts = this.listProducts.filter((item) =>{
      return item.categorias == this.filterCategoria
    })
  }

  cleanFilter(){
    this.listProducts = []
    this.listProducts = this.listWithOutFilter
  }


  goToDetailProduct(item: any){
    
    this.router.navigate(['/detail-product'],{
      queryParams: item
    });
  }

}
