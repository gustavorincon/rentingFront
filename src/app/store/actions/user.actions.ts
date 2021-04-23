import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/user/shared/models/user.model';



export const getCliente = createAction('[cliente] consultar cliente');

export const getClienteSuccess = createAction(
  '[cliente] consultar cliente con exito',
  props<{ cliente: IUser }>()
);

export const setCliente = createAction(
  '[cliente] asignar cliente con ',
  props<{ cliente: IUser }>()
);



