import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { IUser, User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class LoginComponent implements OnInit {
  submitted = false;
  authErrorMessage:string= "";

  logginForm = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(private authService: AuthService,  
    private fb: FormBuilder,
    private router: Router) { 

    }

  ngOnInit(): void {
    this.authErrorMessage=""
  }

   // convenience getter for easy access to form fields
   get f() { return this.logginForm.controls; }

  private getUserForm(): IUser{
    return new User(
    '',
    '',
    this.logginForm.get(['email']).value,
    this.logginForm.get(['password']).value,
    );
  }
  
  async login(){
    this.submitted = true;
    if (this.logginForm.invalid) {
      return;
    }
    this.authService.login(this.getUserForm()).then(()=>{      
      this.authErrorMessage = ""  
      this.router.navigate(['renta/usuario/client-info']); 
    },err=>{
      if(err.code == "UserNotFoundException"){
        this.authErrorMessage = "El usuario con el correo indicado no existe, por favor crea un usuario nuevo"
      }
      if(err.code =="NotAuthorizedException"){
        this.authErrorMessage = "Usuario o contraseña no valido"
      }
      console.log(err);
    });

   

  }

}
