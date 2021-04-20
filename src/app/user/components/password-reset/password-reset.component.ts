import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';
import { AuthService } from '../../services/auth.service';
import { ResetUserPwdRequestDto,IResetUserPwdRequestDto } from '../../shared/dtos/resetUserPasswordRequest';
import { IUser } from '../../shared/models/user.model';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class PasswordResetComponent implements OnInit {

  submitted = false;
  codeErrorMessage:string= "";
  codeSucessMessage:string= "";
  recoverErrorMessage:string= "";
  recoverSucessMessage:string= "";

  codeForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });

  recoverForm = this.fb.group({
    verificationCode: [null, [Validators.required]],
    newPwd: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    newPwd2: [null, [Validators.required]],
  },{
    validator: MustMatch('newPwd', 'newPwd2')
});


  codeSent:boolean = false
  resetPwdRequest: ResetUserPwdRequestDto

  constructor(private authService: AuthService,  
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.codeSent = false 
  }

  // convenience getter for easy access to form fields
  get f() { return this.recoverForm.controls; }

  get fCode(){ return this.codeForm.controls; }

  private getRequestForm(): IResetUserPwdRequestDto{
    return new ResetUserPwdRequestDto(
    this.codeForm.get(['email'])?.value,
    this.recoverForm.get(['verificationCode'])?.value,
    this.recoverForm.get(['newPwd'])?.value,
    this.recoverForm.get(['newPwd2'])?.value);
  }

  async recoverAccount() {  
    this.submitted = true;  
    if (this.codeForm.invalid) {
      return;
    }
    this.codeSent = await this.authService.recoverAccount(this.getRequestForm())
    this.codeSucessMessage = "Hemos enviado un código al correo indicado, por favor verifica para continuar"
  }

  async changePwd() {
    console.log('changePwd()=> ',this.submitted)  
    this.submitted = true; 
    if (this.recoverForm.invalid) {
      return;
    }
    this.authService.changePwd(this.getRequestForm())
    this.recoverSucessMessage = "Los cambios fueron exitosos, ve a iniciar sesión (link abajo)"

  }

}
