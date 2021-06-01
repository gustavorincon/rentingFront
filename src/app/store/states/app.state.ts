import { initialUserState, UserState } from './user.state';



export interface StateGeneral {
  usuario: UserState;
}

export const initialState: StateGeneral = {
  usuario: initialUserState,
};

export function getInitialState(): StateGeneral {
  return initialState;
}
