import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ModalController } from '@ionic/angular';
import { ModalHistorySellerPage } from 'src/app/modal-history-seller/modal-history-seller.page';
import { HistorySellerService } from 'src/app/services/history-seller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nameUser: string;
  showInventary: boolean = false;
  idUser: string = ""

  constructor(
    private nativeStorage: NativeStorage,
    private router: Router,
    private modalController: ModalController,
    private historySellerService: HistorySellerService
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('userInfo').then(data =>{
      console.log(JSON.stringify(data))
      this.nameUser = data.nombres + ' ' + data.apellidos;
      this.showInventary = data.userType != "0";
      this.idUser = data.id

      if(data.userType != "0")this.consultSellerHistory()
   }).catch(err =>{
     
   })


  }

  goToInventarySeller(){
    this.router.navigate(['/inventory-seller'],{
      queryParams: {
        idUser: this.idUser        
      }
    });
  }
  
  consultSellerHistory(){
    this.historySellerService.consultIfSellerHistoryExist(this.idUser).subscribe((data:any) =>{
      if(data.mensaje == "NO HAY HISTORIA PARA EL USUARIO"){
          this.modalController.create({component: ModalHistorySellerPage, cssClass: 'always-modal',swipeToClose: false,canDismiss: false}).then((modalElement)=>{
            modalElement.present()
          })
      }
    })
  }

  closeSession(){
    this.nativeStorage.remove('userInfo').then(()=>{
      this.router.navigate(['/home'])  
    })
  }
}
