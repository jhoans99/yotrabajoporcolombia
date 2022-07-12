import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UploadProductsService {

  constructor(
    private http: HTTP,
    private httpAngular: HttpClient
  ) { }


  postCategories() {
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/categories.php',{},{})
  }

  postWayToSend(){
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/sendMethods.php',{},{})
  }

  postPaymentMethod() {
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/paymentMethods.php',{},{})
  }

  getCities(){
   return this.httpAngular.get('../assets/ciudades.json',{})
  }
}
