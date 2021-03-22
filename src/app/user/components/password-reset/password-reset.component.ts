import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  email: String = ''
  pwd: String = ''
  pwd2: String = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  async recoverAccount() {    
    console.log('entra a login')
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
            var user = await Auth.changePassword(this.email.toString(), this.pwd.toString(), this.pwd2.toString());    
            console.log('Authentication performed for user=' + this.email + 'password=' + this.pwd + ' login result==' + user);    
            alert('Cambio exitoso !');    
          } catch (error) {
            console.log(error);    
            alert('Error cambiando el password');
          }
        }


}
