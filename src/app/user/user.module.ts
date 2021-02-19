import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
