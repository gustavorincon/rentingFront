import { ActionReducerMap } from '@ngrx/store';
import { State } from '../state/app.state';
import { inmuebleReducers } from './inmueble.reducers';


export const reducers: ActionReducerMap<State> = {
  tramietesInmueble : inmuebleReducers
};
