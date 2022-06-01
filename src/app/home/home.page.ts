import { CarrouselService } from './../services/carrousel.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  listCarrousel = []

 constructor( private carrouselService : CarrouselService, private navCtrl: NavController) {

  
 }
  ngOnInit(): void {

    this.carrouselService.getCarrosuel().then(data =>{
      //let response = JSON.parse(data)
      data.data.forEach(element => {
        this.listCarrousel.push({
          title : element.titulo,
          image : element.image
        })
      });
    }).catch(err =>{
      console.log(err)
    })      
  }

  navLogin(){
    this.navCtrl.navigateRoot('LoginPage')
  }
}
