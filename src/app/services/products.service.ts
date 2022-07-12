import { Injectable } from "@angular/core";
import { HTTP } from "@awesome-cordova-plugins/http/ngx";


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    constructor(
        private http: HTTP
    ){}

    postConsultAllProducts(){
        return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/listProducts.php',{},{})
    }

    postConsultFeaturedProducts(){
      return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/productosDestacados.php',{},{})
    }

  }