import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class LoginComponent implements OnInit {


  user: User

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {

  }

  /*async login() {    
    console.log('entra a login')
        try {    
          var user = await Auth.signIn(this.email.toString(), this.password.toString());    
          console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);    
          var tokens = user.signInUserSession;    
          if (tokens != null) {    
            console.log('User authenticated'); 
            this.router.navigate(['renta/usuario/home']);    
            alert('You are logged in successfully !');  
          }    
        } catch (error) {
          console.log(error);    
          alert('User Authentication failed');
        }
      }*/

      async login(){
        console.log('en login ',this.user)
        this.authService.login(this.user)
      }
}
