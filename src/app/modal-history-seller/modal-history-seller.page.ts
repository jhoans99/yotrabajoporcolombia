import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ModalController } from '@ionic/angular';
import { HistorySellerService } from 'src/app/services/history-seller.service';


@Component({
  selector: 'app-modal-history-seller',
  templateUrl: './modal-history-seller.page.html',
  styleUrls: ['./modal-history-seller.page.scss'],
})
export class ModalHistorySellerPage implements OnInit {

  historySeller
  idUser: string = "";
  nameUser: string = "";
  cityUser: string = "";
  programUser: string = "";
  constructor(
    private nativeStorage: NativeStorage,
    private historySellerService: HistorySellerService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('userInfo').then(data =>{
      this.idUser = data.id
      this.nameUser = data.nombres + ' ' + data.apellidos
      this.cityUser =  data.ciudad
      this.programUser = ""
    }).catch(err =>{

    })
  }

  sendHistory(){
    let data = {
      userId: this.idUser,
      nombre: this.nameUser,
      historia : this.historySeller,
      ciudad : this.cityUser,
      programa : this.programUser
    }
    this.historySellerService.insertHisttorySeller(data).subscribe((data:any)=>{
        if(data.mensaje  == "SE SUBIO EXITOSAMENTE"){
          this.modalController.dismiss()
        }
    })
  }

}
