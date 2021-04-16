import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
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

  validateEmailExists(email: string): Boolean{
    try {
       this.clientManagerService.getByEmail(email).subscribe(response=>{
        return response
      })
    } catch (error) {
      console.log("Error validando existencia  cliente => ",error)
      return false
    }
    
  }
  
  async login(){
    this.submitted = true;
    if (this.logginForm.invalid) {
      return;
    }
    this.authService.login(this.getUserForm()).then(()=>{      
      this.authErrorMessage = ""  
      /// Validate if registration is required, notice the username is equal to email 
      this.authService.getCurrentUserName().then(userName =>{        
        if(this.validateEmailExists(userName)){
          this.router.navigate(['renta/administrador']);
        }else{
          this.router.navigate(['renta/usuario/client-info']); 
        }      
    })
      
    },err=>{
      console.log(err);
      if(err.code == "UserNotFoundException"){
        this.authErrorMessage = "El usuario con el correo indicado no existe, por favor crea un usuario nuevo"
      }
      if(err.code =="NotAuthorizedException"){
        this.authErrorMessage = "Usuario o contraseña no valido"
      }
    });

   

  }

}
