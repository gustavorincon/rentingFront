import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing';
import Amplify, {Auth} from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';


Amplify.configure({  
  Auth:{   
  }
});

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
