import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpAngular: HttpClient
  ) { }

  consultCoomentsForProduct(data: any){
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/comentarios.php',data)
  }

  addNewCommentForProduct(data: any){
    return this.httpAngular.post('http://servicios.yotrabajoporcolombiaprueba.site/comentarios.php',data)
  }
}
