import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class SignupComponent implements OnInit {
  
    user:User 
  
    constructor(private router:Router) { }  
  
    ngOnInit(): void {
  
    }  
  
    register(){  
      try {  
        const user = Auth.signUp({  
          username: this.user.email,  
          password: this.user.password,  
          attributes: {  
            email: this.user.email 
          }  
        });  
        alert('User signup completed , please check verify your email.');  
        this.router.navigate(['/renta/usuario/login']);  
      } catch (error) {  
        console.log('error signing up:', error);  
      }  
    }
}
