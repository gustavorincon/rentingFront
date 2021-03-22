import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Console } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class LoginComponent implements OnInit {

  email: string = '';  
  password: string = '';

  constructor(private router: Router) { }
  ngOnInit(): void {

  }


  async loginWithCognito() {    
    console.log('entra a login')
        try {    
          var user = await Auth.signIn(this.email.toString(), this.password.toString());    
          console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);    
          var tokens = user.signInUserSession;    
          if (tokens != null) {    
            console.log('User authenticated'); 
            this.router.navigate(['rent/user/home']);    
            alert('You are logged in successfully !');  
          }    
        } catch (error) {
          console.log(error);    
          alert('User Authentication failed');
        }
      }
}
