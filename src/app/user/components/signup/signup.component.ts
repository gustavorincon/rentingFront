import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser, User } from '../../shared/models/user.model';
import { MustMatch } from '../../../shared/validators/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class SignupComponent implements OnInit {
  submitted = false;
  user: User;
  signupError = false;
  signupMessage = '';

  signupForm = this.fb.group({
    email: [null, [Validators.required, Validators.email, Validators.maxLength(45)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    confirmPassword: [null, [Validators.required]],
  },{
    validator: MustMatch('password', 'confirmPassword')
    });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

  } 

  get f() { return this.signupForm.controls; }

  private getUserForm(): IUser{
    return new User(
    '',
    '',
    this.signupForm.get(['email']).value,
    this.signupForm.get(['password']).value,
    );
  }
  
  
  async register(){
    this.signupError = false;
    this.signupMessage = '';
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.signUp(this.getUserForm()).then(() => {
    this.signupMessage = 'Usuario creado exitosamente';
    }, err => {
      this.signupError = true;
      console.log(err);
      this.signupMessage = 'Error Creando el usuario';
      if (err.code === 'UsernameExistsException'){
        this.signupMessage = 'El usuario ya existe, por favor revisar';
      }
    });
  }
}
