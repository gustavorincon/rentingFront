import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, {Auth} from 'aws-amplify';
import { IResetUserPwdRequestDto, ResetUserPwdRequestDto } from '../shared/dtos/resetUserPasswordRequest';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile : any  

  constructor(private router: Router) { }

  async isLogged(): Promise<boolean> { 
    try { 
      var userSession =  await Auth.currentSession()
      console.log('isLogged => ', userSession)
      return (userSession != null)
    } catch (error) {
      console.log(error);    
      return new Promise((resolve, reject) => {
        let data:boolean = false;
        resolve(data);
    });
    }
   }


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
          }    
        } catch (error) {
          console.log(error);    
        }
      }


  async logout() {      
      Auth.signOut()    
  }


  signUp(user: User){  
    try {  
      const cognitoUser = Auth.signUp({  
        username: user.email,  
        password: user.password,  
        attributes: {  
          email: user.email 
        }  
      });  
      console.log('El usuairo es => ',{ cognitoUser });  
      this.router.navigate(['/renta/usuario/login']);  
    } catch (error) {  
      console.log('error signing up:', error);  
    }  
  }

  async recoverAccount(recoverRequest:IResetUserPwdRequestDto): Promise<boolean> {    
    console.log('recoverAccount => ',recoverRequest.email.toString())
        try {    
          var user = await Auth.forgotPassword(recoverRequest.email.toString());    
          console.log('Password reset = ' + recoverRequest.email);  
          return true
        } catch (error) {
          console.log(error);    
          return false
        }
      }


    async changePwd(recoverRequest:IResetUserPwdRequestDto) {    
      console.log('entra a login')
          try {   
            if( recoverRequest.newPwd !=  recoverRequest.newPwd2){
              throw new Error('deben ser iguales')
            } 
            console.log('Authentication performed for user=' + recoverRequest.email + 'code=' + recoverRequest.verificationCode + ' newPwd==' + recoverRequest.newPwd);    
            var user = await Auth.forgotPasswordSubmit(recoverRequest.email.toString(), recoverRequest.verificationCode.toString(), recoverRequest.newPwd.toString());                
            this.router.navigate(['/renta/usuario/login']);     
          } catch (error) {
            console.log(error);    
          }
        }


}
