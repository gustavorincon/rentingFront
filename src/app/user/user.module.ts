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
      userPoolId: 'rentingauh47d5113c_userpool_47d5113c-dev',  
      userPoolWebClientId: '38gsb0o14hok45lppdeqg0mkes',  
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
