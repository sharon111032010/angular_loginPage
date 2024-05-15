import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent {
  isClass:boolean=false;
  isNull:boolean=false;
  form = new FormGroup({
    account: new FormControl(""),
    password:new FormControl("")
  })
  
  constructor(private router:Router) { } // <-- 注入router:Router

  ngOnInit(): void {
  }

  getValue(){
    const params = {
      ...this.form.getRawValue()
    }

    if(params.account=="123" &&params.password=="123"){
      alert("ok");
      this.isClass=false;
      console.log(this.isClass);
      this.to_index();
      this.router.navigate(['/index']);
    
    }else{
      alert("the username or the password is incorrect");
      this.isClass=true;
      console.log(this.isClass);
    }

    console.log(params);
  }

  goBack(): void { };
  isNullFun(){
    if(this.form.getRawValue().account==null){
    }
  }
  //頁面路由切換
  to_register_page(){
    this.router.navigate(['/register-page']);
  }
  to_forget_page(){
    this.router.navigate(['/forget-page']);
  }
  to_index(){
    this.router.navigate(['/index']);
  }
}
