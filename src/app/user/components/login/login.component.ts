import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser, User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class LoginComponent implements OnInit {


  logginForm = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(private authService: AuthService,  
    private fb: FormBuilder,
    private router: Router) { 

    }

  ngOnInit(): void {

  }

   // convenience getter for easy access to form fields
   get f() { return this.logginForm.controls; }

  private getUserForm(): IUser{
    return new User(
    '',
    '',
    this.logginForm.get(['email']).value,
    this.logginForm.get(['password']).value);
  }
  
  async login(){
    this.authService.login(this.getUserForm())
  }
}
