import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTP } from "@awesome-cordova-plugins/http/ngx";


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    constructor(
        private http: HTTP,
        private httpAngular: HttpClient
    ){}

    postConsultAllProducts(){
        return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/listProducts.php',{},{})
    }

    postConsultFeaturedProducts(){
      return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/productosDestacados.php',{},{})
    }

    postConsultProductsBySeller(idSeller: string){
      let dataSend = {
        "id": idSeller
      }
      return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/listProductsSeller.php',dataSend)
    }

  }