import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    constructor(
      private http: HTTP
    ) { }
  
    postLogin(dataSend : any){
      //return this.http.get('https://yotrabajoporcolombiapruebas.000webhostapp.com/Slider.php')
      let data = {
        "correo_electronico": dataSend.username,
        "contrasena": dataSend.password
    }
      return this.http.post('http://servicios.yotrabajoporcolombiaprueba.site/login.php',data,{})
    }
  }
  