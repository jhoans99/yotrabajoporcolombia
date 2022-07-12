import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { UserInfoServiceService } from 'src/app/services/user-info-service.service';

@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.page.html',
  styleUrls: ['./bussines.page.scss'],
})
export class BussinesPage implements OnInit {


  listHistories = []
  showLogin: boolean = false;
  myCustomIcon = "/assets/icons/man.png";

  constructor(
    public userService: UserInfoServiceService,
    public nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.userService.consultHistories("3","").subscribe((data:any)=>{
      if(data.mensaje == 'SI HAY HISTORIAS'){
        this.listHistories = data.info
      }
    })

    this.nativeStorage.getItem('userInfo').then(data =>{
      this.showLogin = false
   }).catch(err =>{
     this.showLogin = true
   })
  }

}
