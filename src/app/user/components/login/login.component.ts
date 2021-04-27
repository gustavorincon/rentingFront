import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { ClientManagerService } from '../../services/client-manager/client-manager.service';
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
    private clientManagerService:ClientManagerService,
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

  validateEmailExists(email: string){
    console.log(" cliente a validar => ",email)
    this.clientManagerService.getByEmail(email)
    .pipe(catchError(err => of(false)))
    .subscribe(
      res=>{
        console.log("response existencia  cliente => ",res)
        if(res) this.router.navigate(['renta/administrador'])
        else this.router.navigate(['renta/usuario/client-info'])
        
      },
      er => {
        console.log("Error existencia  cliente => ",er)        
        this.router.navigate(['renta/usuario/client-info']);
      }
    )
  }
  
  async login(){
    this.authErrorMessage = '';
    this.submitted = true;
    if (this.logginForm.invalid) {
      return;
    }
    this.authService.login(this.getUserForm()).then(() => {
      /// Validate if registration is required, notice the username is equal to email 
      this.authService.getCurrentUserName().then(userName => {
        this.validateEmailExists(userName);
      });
    }, err => {
      console.log(err);
      this.authErrorMessage = 'Error en el ingreso del usuario';
      if (err.code === 'UserNotFoundException'){
        this.authErrorMessage = 'El usuario con el correo indicado no existe, por favor crea un usuario nuevo';
      }
      if (err.code === 'NotAuthorizedException'){
        this.authErrorMessage = 'Usuario o contraseña no valido';
      }
      if (err.code === 'UserNotConfirmedException'){
        this.authErrorMessage = 'Primero debes confirmar el usuario desde tu correo';
      }
    });

  }

}
