import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  showLogin: boolean = false;
  myCustomIcon = "/assets/icons/man.png";

  constructor(
    public nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('userInfo').then(data =>{
      this.showLogin = false
   }).catch(err =>{
     this.showLogin = true
   })
  }

}
