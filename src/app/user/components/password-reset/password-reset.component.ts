import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class PasswordResetComponent implements OnInit {
  email: String = ''
  verificationCode: String = ''
  newPwd: String = ''
  newPwd2: String = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  async recoverAccount() {    
    console.log('recoverAccount => ',this.email.toString())
        try {    
          var user = await Auth.forgotPassword(this.email.toString());    
          console.log('Password reset = ' + this.email);    
          alert('Hemos enviado las instrucciones para cambiar tu contrasenia');
        } catch (error) {
          console.log(error);    
          alert('Error recuperando la cuenta');
        }
      }


    async changePwd() {    
      console.log('entra a login')
          try {   
            if( this.newPwd !=  this.newPwd2){
              throw new Error('deben ser iguales')
            } 
            console.log('Authentication performed for user=' + this.email + 'code=' + this.verificationCode + ' newPwd==' + this.newPwd);    
            var user = await Auth.forgotPasswordSubmit(this.email.toString(), this.verificationCode.toString(), this.newPwd.toString());                
            alert('Contraseña se ha cambiad exitosamente');  
            this.router.navigate(['/renta/usuario/login']);     
          } catch (error) {
            console.log(error);    
            alert('Error cambiando el password');
          }
        }


}
