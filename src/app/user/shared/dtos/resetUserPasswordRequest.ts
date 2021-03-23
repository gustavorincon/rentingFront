export interface ResetUserPwdRequestDto{
  email: String ;
  verificationCode: String;
  codeSent:boolean;
  newPwd: String;
  newPwd2: String;
}