export interface IResetUserPwdRequestDto{
  email: String ;
  verificationCode: String;
  newPwd: String;
  newPwd2: String;
}


export class ResetUserPwdRequestDto implements IResetUserPwdRequestDto{
  constructor(
    public email:string,
    public verificationCode:string,
    public newPwd:string,
    public newPwd2:string
  ){}
}