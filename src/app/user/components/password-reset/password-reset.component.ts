import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { AuthService } from '../../services/auth.service';
import { ResetUserPwdRequestDto,IResetUserPwdRequestDto } from '../../shared/dtos/resetUserPasswordRequest';
import { IUser } from '../../shared/models/user.model';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['/src/app/user/user.component.css'] 
})
export class PasswordResetComponent implements OnInit {

  recoverForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });


  codeSent:boolean = false
  resetPwdRequest: ResetUserPwdRequestDto

  constructor(private authService: AuthService,  
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.codeSent = false 
  }

  private getRequestForm(): IResetUserPwdRequestDto{
    return new ResetUserPwdRequestDto(
    this.recoverForm.get(['email']).value,
    this.recoverForm.get(['verificationCode']).value,
    this.recoverForm.get(['newPwd']).value,
    this.recoverForm.get(['newPwd2']).value);
  }

  async recoverAccount() {    
    this.codeSent = await this.authService.recoverAccount(this.getRequestForm())
  }

  async changePwd() {   
    this.authService.changePwd 
  }

}
