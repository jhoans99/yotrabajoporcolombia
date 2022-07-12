import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {

  constructor(
    private http: HTTP,
    private httpAngular: HttpClient
  ) { }

  consultSellerInfo(id:string){
    let dataSend = {
      "userId": id
    }
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/infoUser.php',dataSend)
  }

  consultHistories(type:string,idUser:string){
    let dataSend = {
        "type": type,
        "userId": idUser
    }
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/agregarHistoria.php',dataSend)
  }
}
