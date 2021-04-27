import { createAction, props } from '@ngrx/store';
import { Inmueble } from '../../shared/model/inmueble.model';


export const registrarInmueble = createAction(
    '[registrar inmueble]  crear un inmueble',
    props<{ inmueble: Inmueble }>()
  );

export const registrarInmuebleSuccess = createAction(
    '[registrar inmueble] crear un inmueble con exito',
    props<{  inmueble: Inmueble }>()
  );
