import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private loginService : LoginService
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
    this.loginService.postLogin(datasend).then(data =>{
      console.log("Form",data.data)
    }).catch(err =>{
      console.log("Form",err)
    })
  }
}
