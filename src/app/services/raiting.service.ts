import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaitingService {

  constructor(
    public httpAngular: HttpClient
  ) { }

  postSendRaiting(data: any){
    let dataSend = {
      "id" : "",
      "type": 2,
      "userIdSeller": data.userIdSeller,
      "productId": data.productId,
      "calificacion": data.calificacion,
      "userId": data.userId
    }

    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/calificacion.php',data,{})
  }
}
