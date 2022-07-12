import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    constructor(
      private http: HTTP,
      private httpAngular: HttpClient
    ) { }
  
    postLogin(dataSend : any){
      let data = {
        correo_electronico: dataSend.username,
        contrasena: dataSend.password
      }

      console.log("Data send"+JSON.stringify(data))

      return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/login2.php',data)
      //return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/login2.php',data,{})
    }

    postRegister(dataRegister : any){
      return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/registro2.php',dataRegister,{})
    }
  }
  