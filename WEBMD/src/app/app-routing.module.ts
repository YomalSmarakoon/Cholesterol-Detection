import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'user-detail-form', component:UserDetailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
