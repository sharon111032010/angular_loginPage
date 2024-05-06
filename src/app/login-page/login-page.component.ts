import { Component ,OnInit} from '@angular/core';
// import { Router } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';
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
    }else{
      alert("the username or the password is incorrect");
      this.isClass=true;
      console.log(this.isClass);
    }
    console.log(params);
  }
  // loginform=new FormGroup({
  //   account: new FormControl("")
  // })

  goBack(): void {
    // this.location.back();
  }
  isNullFun(){
    if(this.form.getRawValue().account==null){
      // this.isNull=true;
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
