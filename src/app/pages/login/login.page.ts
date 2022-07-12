import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { NavController } from '@ionic/angular';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private loginService : LoginService,
    private nativeStorage: NativeStorage,
    public router : Router,
    public navCtrl: NavController
  ) { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    
  }

  logForm(){
    let datasend = {
      username : this.form.value.username,
      password : this.form.value.password
    }

    this.loginService.postLogin(datasend).subscribe( (data:any) =>{
      console.log(JSON.stringify(data))
      if(data.mensaje == "LOGIN EXITOSO"){
        this.nativeStorage.setItem('userInfo',data.info).then(()=>{
            this.router.navigate(['/home'])          
          }).catch(()=>{
            // TODO: Implement when it saves data but ocurred an error
        })
        
      }
    })
  }
}
