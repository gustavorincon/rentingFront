import { Inmueble } from '../../shared/model/inmueble.model';
import { Interesado } from '../../shared/model/interesado.model';



export interface InmuebleState {
    nuevoInmueble: Inmueble;
    listaInmuebles: Inmueble [];
    listaInteresadosInmueble: Interesado[];

}

export const initialInmuebleState: InmuebleState = {
    nuevoInmueble: null,
    listaInmuebles: null,
    listaInteresadosInmueble: null
};
