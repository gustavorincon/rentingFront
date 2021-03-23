import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { ResetUserPwdRequestDto } from '../../shared/dtos/resetUserPasswordRequest';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class PasswordResetComponent implements OnInit {
  codeSent:boolean = false

  resetPwdRequest: ResetUserPwdRequestDto

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  async recoverAccount() {    
        try {    
          var user = await Auth.forgotPassword(this.resetPwdRequest.email.toString());    
          console.log('Password reset = ' + this.resetPwdRequest.email);  
          this.codeSent = true  
          alert('Hemos enviado las instrucciones para cambiar tu contrasenia');
        } catch (error) {
          this.codeSent = false
          console.log(error);    
          alert('Error recuperando la cuenta');
        }
      }


    async changePwd() {    
      console.log('entra a login')
          try {   
            if( this.resetPwdRequest.newPwd !=  this.resetPwdRequest.newPwd2){
              throw new Error('deben ser iguales')
            } 
            console.log('Authentication performed for user=' + this.resetPwdRequest.email + 'code=' + this.resetPwdRequest.verificationCode + ' newPwd==' + this.resetPwdRequest.newPwd);    
            var user = await Auth.forgotPasswordSubmit(this.resetPwdRequest.email.toString(), this.resetPwdRequest.verificationCode.toString(), this.resetPwdRequest.newPwd.toString());                
            alert('Contraseña se ha cambiad exitosamente');  
            this.router.navigate(['/renta/usuario/login']);     
          } catch (error) {
            console.log(error);    
            alert('Error cambiando el password');
          }
        }


}
