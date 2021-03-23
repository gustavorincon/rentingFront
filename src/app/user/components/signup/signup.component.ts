import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser, User } from '../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class SignupComponent implements OnInit {

  
  signupForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  
    user:User 
  
    constructor(private authService: AuthService,  
      private fb: FormBuilder,
      private router: Router) { }  
  
    ngOnInit(): void {
  
    } 
    
    private getUserForm(): IUser{
      return new User(
      '',
      '',
      this.signupForm.get(['email']).value,
      this.signupForm.get(['password']).value);
    }


    async register(){
      this.authService.signUp(this.getUserForm())
    }
}
