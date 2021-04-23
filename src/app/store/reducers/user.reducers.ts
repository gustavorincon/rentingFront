import { initialUserState, UserState } from '../states/user.state';
import * as fromUser from '../actions/user.actions';
import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';

const reducer = createReducer(
  initialUserState,
  on(fromUser.setCliente, (state, { cliente }) => {
    return { ...state, cliente };
  })
);

export function userReducers(
  state = initialUserState,
  action
): UserState {
  return produce((draft: UserState, formAction: Action) => {
    return reducer(draft, formAction);
  }, initialUserState)(state, action);
}
