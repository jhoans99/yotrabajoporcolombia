import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { CommentsService } from 'src/app/services/comments.service';
import { UserInfoServiceService } from 'src/app/services/user-info-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  productInfo: any;
  pathImage = [];
  productName: string = "";
  productPrice: string = "";
  producDescription: string = "";
  typePayment = [];
  typeSend = [];
  infoSeller: any;
  contactWhastapp: string = "";
  contactFacebook: string = "";
  contactInstagram: string = "";
  contactTwitter: string = ""
  nameSeller: string = "";
  lastNameSeller: string = "";
  citySeller: string = "";
  showContactWhastapp: boolean = false;
  showContactFacebook: boolean = false;
  showContactInstagram: boolean = false;
  showContactTwitter: boolean = false;
  showLogin: boolean = false;
  myCustomIcon = "/assets/icons/man.png";
  listComments = [];
  addNewCommentStr: string = "";
  producInfo: any;
  userInfo:any;


  constructor(
    public activatedRoute : ActivatedRoute,
    public userInforService: UserInfoServiceService,
    public nativeStorage: NativeStorage,
    public commentsService: CommentsService,
    public toast: ToastController
  ) { }

  ngOnInit() {
     this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.productInfo = res
      this.loadItems(res)
      this.loadCommentsProduct(res)
    });

    this.nativeStorage.getItem('userInfo').then(data =>{
      this.showLogin = false
      this.userInfo = data
   }).catch(err =>{
     this.showLogin = true
   })
  }

  loadItems(item:any){
    this.userInforService.consultSellerInfo(item.userId).subscribe((res: any)=>{
          if(res.mensaje == "CONSULTA EXITOSA"){
            this.infoSeller = res.info;
            this.nameSeller = res.info.nombres;
            this.lastNameSeller = res.info.apellidos;
            this.contactWhastapp = res.info.whatsapp;
            this.contactFacebook = res.info.facebook;
            this.contactInstagram = res.info.instagram;
            this.contactTwitter = res.info.twitter;
            this.citySeller = res.info.ciudad
            this.showContactWhastapp = this.contactWhastapp != "";
            this.showContactFacebook = this.contactFacebook != "";
            this.showContactInstagram = this.contactInstagram != "";
            this.showContactTwitter = this.contactTwitter != "";
          }
    })

    this.pathImage = item.imagenes;
    this.productName = item.nombre;
    this.productPrice = item.precio;
    this.producDescription = item.descripcion;
    this.typePayment = item.medios_pago;
    this.typeSend = item.medios_envio
  }

  loadCommentsProduct(item: any){
    this.listComments = []
    let data = {
      "type": 2,
      "productId": item.id,
      "userIdSeller": item.userId
    }
    this.commentsService.consultCoomentsForProduct(data).subscribe((data: any)=>{       
      if(data.mensaje == "SI HAY COMENTARIOS"){
        console.log("Comentarios"+JSON.stringify(data.info))
        this.listComments = data.info
      }
    })
  }

  addNewComment(){
    let data = {
      "type": 1,
      "userId": this.userInfo.id,
      "userIdSeller": this.producInfo.userId,
      "productId": this.producInfo.id,
      "comentario": this.addNewCommentStr,
      "ciudad": this.userInfo.ciudad,
      "nombre": this.userInfo.name,
      "fecha": new Date().getDate()
    }
    this.commentsService.addNewCommentForProduct(data).subscribe((data: any) =>{
      if(data.mensaje == "SE SUBIO EXITOSAMENTE"){
        this.loadCommentsProduct(this.producInfo)
      } 
    })
  }

  goToWhatsapp(){
    window.open(`https://api.whatsapp.com/send?phone=57${this.contactWhastapp}`)
  }
}
