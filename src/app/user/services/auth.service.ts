import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Auth} from 'aws-amplify';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResetUserPwdRequestDto } from '../shared/dtos/resetUserPasswordRequest';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile : any  

  constructor(private router: Router) { }

  errorHandler(error: Error) {
    return throwError(error.message || "Auth error.");
  }

  async isLogged(): Promise<boolean> { 
    try { 
      var userSession =  await Auth.currentSession()
      console.log('isLogged => ', userSession)
      return (userSession != null)
    } catch (error) {
      console.log(error);    
      return new Promise((resolve) => {
        let data:boolean = false;
        resolve(data);
    });
    }
   }

   async getCurrentUserName(): Promise<string> { 
    return Auth.currentAuthenticatedUser().then(user =>{
      return user?.getUsername()
    })
  }



  // Function para logueo con cognito
  async login(user: User){    
    return Auth.signIn(user.email.toString(), user.password.toString());    
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
            console.log('Authentication performed for user= ' + recoverRequest.email + ' code=' + recoverRequest.verificationCode + ' newPwd==' + recoverRequest.newPwd);    
            this.router.navigate(['/renta/usuario/login']);     
          } catch (error) {
            console.log(error);    
          }
        }


}
