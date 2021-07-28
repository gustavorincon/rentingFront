import { createAction, props } from '@ngrx/store';
import { Inmueble } from '../../shared/model/inmueble.model';
import { Interesado } from '../../shared/model/interesado.model';
import { ListaInmueblesRequest } from '../../shared/model/request/lista-inmuebles.request';
import { ListaInteresadosRequest } from '../../shared/model/request/lista-interesados.request';


export const registrarInmueble = createAction(
    '[registrar inmueble]  crear un inmueble',
    props<{ inmueble: Inmueble }>()
  );

export const registrarInmuebleSuccess = createAction(
    '[registrar inmueble] crear un inmueble con exito',
    props<{  inmueble: Inmueble }>()
  );

export const getlistaInmuebles = createAction(
    '[lista  inmueble]  traer lista de inmuebles',
    props<{ request: ListaInmueblesRequest }>()
  );

export const getlistaInmueblesSuccess = createAction(
    '[registrar inmueble] crear un inmueble con exito',
    props<{  listaInmueble: Inmueble[] }>()
  );


export const getlistaInteresados = createAction(
    '[lista  interesados]  traer lista de interesados',
    props<{ request: ListaInteresadosRequest }>()
  );

export const getlistaInteresadosSuccess = createAction(
    '[registrar interesados] crear un inmueble con exito',
    props<{  listaInteresados: Interesado[] }>()
  );

