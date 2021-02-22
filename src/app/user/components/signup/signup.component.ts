import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
    email:string;  
    password:string;  
    givenName:string;  
    familyName:string;
  
    constructor(private router:Router) { }  
  
    ngOnInit(): void {
  
    }  
  
    register(){  
      try {  
        const user = Auth.signUp({  
          username: this.email,  
          password: this.password,  
          attributes: {  
            email: this.email,  
            given_name: this.givenName,  
            family_name: this.familyName  
          }  
        });  
        console.log({ user });  
        alert('User signup completed , please check verify your email.');  
        this.router.navigate(['login']);  
      } catch (error) {  
        console.log('error signing up:', error);  
      }  
    }
}
