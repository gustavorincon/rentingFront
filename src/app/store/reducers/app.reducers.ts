import { ActionReducerMap } from '@ngrx/store';
import { StateGeneral } from '../states/app.state';
import { userReducers } from './user.reducers';


export const reducers: ActionReducerMap<StateGeneral> = {
  usuario: userReducers,
};
