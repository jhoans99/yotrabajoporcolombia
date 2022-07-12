import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  public form: FormGroup;
  public isSeller: Number = 0
  public acceptTermns: Number = 0


  constructor(
    public fb: FormBuilder,
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      names: ['', Validators.required],
      lastnames: ['', Validators.required],
      phone : ['', Validators.required],
      city: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      isSeller: [false],
      isWhastapp : [false],
      isFacebook: [false],
      isInstagram: [false],
      isTwitter: [false],
      whatsappNumber: [''],
      urlFacebook: [''],
      urlInstragram: [''],
      urlTwitter: [''],
      acceptTerms: [false,Validators.requiredTrue]
    });
  }


  logForm(){

    this.validData()
  
    let datasend = {
      id : "",
      nombres : this.form.value.names,
      apellidos : this.form.value.lastnames,
      contrasena : this.form.value.password,
      correo_electronico : this.form.value.username,
      telefono : this.form.value.phone,
      ciudad : this.form.value.city,
      terminos_y_condiciones : this.acceptTermns,
      typeUser : this.isSeller.toString(),
      whatsapp : this.form.value.whatsappNumber,
      facebook : this.form.value.urlFacebook,
      instagram : this.form.value.urlInstragram,
      twitter : this.form.value.urlTwitter
    }
    this.loginService.postRegister(datasend).then(data =>{
      let response = JSON.parse(data.data)
      if(response.mensaje == "SE REGISTRO EXITOSAMENTE EL USUARIO"){
          //TODO: REDIRECT TO LOGIN
      }else{
          //TODO: REDIRECT TO HOME
      }
    }).catch(err =>{
      console.log("Form",err)
    })
  }

  validData(){
    if(this.form.value.isSeller){
      this.isSeller = 1
    }else{
      this.isSeller = 0
    }

    if(this.form.value.acceptTerms){
      this.acceptTermns = 0
    }else{
      this.acceptTermns = 1
    }
  }

}
