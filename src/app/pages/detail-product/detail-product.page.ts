import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
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


  constructor(
    public activatedRoute : ActivatedRoute,
    public userInforService: UserInfoServiceService,
    public nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
     this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.loadItems(res)
    });

    this.nativeStorage.getItem('userInfo').then(data =>{
      this.showLogin = false
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

}
