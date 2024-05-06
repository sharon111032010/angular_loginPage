import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgetPageComponent } from './forget-page/forget-page.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path:"login-page",
    component:LoginPageComponent
  },{
    path:"register-page",
    component:RegisterPageComponent
  },{
    path:"forget-page",
    component:ForgetPageComponent
  },{
    path:"index",
    component:IndexComponent
  }
];

@NgModule({
  //有修改過
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
