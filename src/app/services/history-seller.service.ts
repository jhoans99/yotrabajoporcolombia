import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorySellerService {

  constructor(
    private httpAngular: HttpClient
  ) { }

  consultIfSellerHistoryExist(idUser: string){
    let dataSend = {
      "type": 1,
      "userId": idUser
    }
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/agregarHistoria.php',dataSend)
  }

  insertHisttorySeller(data: any){
    let dataSend = {
      "id" : 0,
      "type": 2,
      "userId" : data.userId,
      "nombre" : data.nombre,
      "historia" : data.history,
      "ciudad" : data.ciudad,
      "programa": data.programa,
      "imagen": data.imagen
    }

    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/agregarHistoria.php',dataSend)
  }
}
