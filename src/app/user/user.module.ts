import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing';
import Amplify, {Auth} from 'aws-amplify';
import { FormsModule } from '@angular/forms';


Amplify.configure({  
  Auth:{  
    mandatorySignIn:true,  
    region: 'us-east-1',  
    userPoolId: 'userPoolId',  
    userPoolWebClientId: 'userPoolWebClientId',  
    authenticationFlowType:'USER_PASSWORD_AUTH'  
  }
});

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
