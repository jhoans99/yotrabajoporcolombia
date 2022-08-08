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

  postUploadProduct(data: any){
    let imagenes = []
    data.files.forEach(element => {
      imagenes.push({
        nombreArchivo: element.nombreArchivo,
        base64textString: element.base64textString
      })
    });

    let dataJson = {
      "id": "",
      "userId": data.idUser,
      "nombre": data.name,
      "tipo_envio": "Envio con normalidad",
      "envio": data.typeShipping,
      "precio": data.price,
      //"categorias": data.categories,
      "categorias": "Hogar",
      "resenas": "",
      "ciudad": data.city,
      "descripcion": data.description,
      "valor_envio": data.priceToSend,
      "descuento": data.discount,
      "eliminar": 0,
      "medios": data.typePayment,
      "archivo": imagenes
    }
    
    console.log("Data to server"+ JSON.stringify(dataJson))
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/upload_product2.php',dataJson,{})
  }

  postUpdateProduct(){
    
  }

  getCities(){
   return this.httpAngular.get('../assets/ciudades.json',{})
  }
}
