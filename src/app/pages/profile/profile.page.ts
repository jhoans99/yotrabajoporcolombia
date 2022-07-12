import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nameUser: string;
  showInventary: boolean = false;

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('userInfo').then(data =>{
      console.log(JSON.stringify(data))
      this.nameUser = data.nombres + ' ' + data.apellidos;
      this.showInventary = data.userType != "0";

   }).catch(err =>{
     
   })
  }

}
