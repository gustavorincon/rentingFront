import { Action, createReducer, on } from '@ngrx/store';
import { registrarInmuebleSuccess } from '../actions/inmuble.actions';
import { initialInmuebleState, InmuebleState } from '../state/inmueble.state';
import produce from 'immer';



const reducer = createReducer(
    initialInmuebleState,
    on(
        registrarInmuebleSuccess,
      (state, { inmueble }) => {
        return {
          ...state,
          nuevoInmueble: inmueble,
        };
      }
    )
  );

export function inmuebleReducers(
    state = initialInmuebleState,
    action
  ): InmuebleState {
    return produce((draft: InmuebleState, formAction: Action) => {
      return reducer(draft, formAction);
    }, initialInmuebleState)(state, action);
}
