import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { ResetUserPwdRequestDto } from '../shared/dtos/resetUserPasswordRequest';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile : any

  constructor(private router: Router) { }


  // Function para logueo con cognito
  async login(user: User) {    
    console.log('entra a login')
        try {    
          var cognitoUser = await Auth.signIn(user.email.toString(), user.password.toString());    
          console.log('Authentication performed for user=' + user.email + 'password=' + user.password + ' login result==' + cognitoUser);    
          var tokens = cognitoUser.signInUserSession;    
          if (tokens != null) {    
            console.log('User authenticated'); 
            this.router.navigate(['renta/usuario/home']);    
            alert('You are logged in successfully !');  
          }    
        } catch (error) {
          console.log(error);    
          alert('User Authentication failed');
        }
      }


  register(user: User){  
    try {  
      const cognitoUser = Auth.signUp({  
        username: user.email,  
        password: user.password,  
        attributes: {  
          email: user.email 
        }  
      });  
      console.log('El usuairo es => ',{ cognitoUser });  
      alert('User signup completed , please check verify your email.');  
      this.router.navigate(['/renta/usuario/login']);  
    } catch (error) {  
      console.log('error signing up:', error);  
    }  
  }

  async recoverAccount(recoverRequest:ResetUserPwdRequestDto) {    
    console.log('recoverAccount => ',recoverRequest.email.toString())
        try {    
          var user = await Auth.forgotPassword(recoverRequest.email.toString());    
          console.log('Password reset = ' + recoverRequest.email);  
          recoverRequest.codeSent = true  
          alert('Hemos enviado las instrucciones para cambiar tu contrasenia');
        } catch (error) {
          recoverRequest.codeSent = false
          console.log(error);    
          alert('Error recuperando la cuenta');
        }
      }


    async changePwd(recoverRequest:ResetUserPwdRequestDto) {    
      console.log('entra a login')
          try {   
            if( recoverRequest.newPwd !=  recoverRequest.newPwd2){
              throw new Error('deben ser iguales')
            } 
            console.log('Authentication performed for user=' + recoverRequest.email + 'code=' + recoverRequest.verificationCode + ' newPwd==' + recoverRequest.newPwd);    
            var user = await Auth.forgotPasswordSubmit(recoverRequest.email.toString(), recoverRequest.verificationCode.toString(), recoverRequest.newPwd.toString());                
            alert('Contraseña se ha cambiad exitosamente');  
            this.router.navigate(['/renta/usuario/login']);     
          } catch (error) {
            console.log(error);    
            alert('Error cambiando el password');
          }
        }


}
