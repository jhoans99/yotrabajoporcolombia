import { CarrouselService } from './../services/carrousel.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ProductService } from '../services/products.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  listCarrousel = []


  listProductsAccessories = []
  listProductsFood = []
  listProductsHome = []
  listProductsClothes = []
  listFeaturedProducts = []

  showLogin : boolean = true

  myCustomIcon = "/assets/icons/man.png";

  listProducts = []
  

 constructor( 
  private carrouselService : CarrouselService, 
  private navCtrl: NavController,
  private productsService: ProductService,
  private platform: Platform,
  private nativeStorage: NativeStorage,
  public router : Router) { 
    console.log("entro aca constructor")
  }
ngOnInit(): void {
  this.platform.ready().then(()=>{
    this.loadDataInit()
    this.nativeStorage.getItem('userInfo').then(data =>{
       this.showLogin = false
    }).catch(err =>{
      this.showLogin = true
    })
  })  
}

  navLogin(){
    this.navCtrl.navigateRoot('LoginPage')
  }

  loadDataInit(){
      this.consultProducts()
      this.getCarrousel()
      this.getFeaturedProducts()
  }

  consultProducts():void {
    this.productsService.postConsultAllProducts().then(data =>{
      
      let respose = JSON.parse(data.data)
      if(respose.mensaje == "CONSULTA EXITOSA"){
        this.listProducts = respose.info

        this.listProductsClothes = this.listProducts.filter((item) =>{
          return item.categorias == "Ropa"
        })

        this.listProductsAccessories = this.listProducts.filter((item) =>{
          return item.categorias == "Accesorios"
        })

        this.listProductsHome = this.listProducts.filter((item) =>{
          return item.categorias == "Hogar"
        })

        this.listProductsFood = this.listProducts.filter((item) =>{
          return item.categorias == "Alimentos"
        })

        console.log(this.listProductsClothes.length)
      }
    }
    ).catch(err =>{

    })
  }

  getFeaturedProducts(){

    this.productsService.postConsultFeaturedProducts().then((data:any)=>{
      let respose = JSON.parse(data.data)

      if(respose.mensaje == "CONSULTA EXITOSA"){
        this.listFeaturedProducts = respose.info
        
      }
    }).catch(err =>{

    })
  }

  getCarrousel(){
    this.carrouselService.getCarrosuel().then(data =>{
      let response = JSON.parse(data.data)
      console.log(JSON.stringify(response))
      response.forEach(element => {
        this.listCarrousel.push({
          title : element.titulo,
          image : element.image
        })
      });
    }).catch(err =>{
      console.log("error"+JSON.stringify(err))
    })   
  }

  goToDetailProduct(item: any){
    //this.navCtrl.navigateForward('/detail-product')
    this.router.navigate(['/detail-product'],{
      queryParams: item,
    });
  }

}
