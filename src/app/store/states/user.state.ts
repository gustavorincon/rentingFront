import { IUser } from 'src/app/user/shared/models/user.model';


export interface UserState {
  usuario: IUser;

}

export const initialUserState: UserState = {
  usuario: null,

};
