import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing';
import Amplify, {Auth} from 'aws-amplify';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RentingSharedModule } from '../shared/shared.module';
import { UserClientInfoComponent } from './components/user-client-info/user-client-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


Amplify.configure({
  Auth: {
  }
});

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    UserClientInfoComponent
  ],
  imports: [
    RentingSharedModule,
    CommonModule,
    UserRoutingModule,
    NgbModule
  ],
})
export class UserModule { }