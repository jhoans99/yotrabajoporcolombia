import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(
    private http: HTTP
  ) { }

  getCarrosuel(){
    return this.http.get('http://servicios.yotrabajoporcolombiaprueba.site/Slider.php',{},{})
  }
}
