import { Inmueble } from '../../shared/model/inmueble.model';



export interface InmuebleState {
    nuevoInmueble: Inmueble;
    listaInmuebles: Array<Inmueble>;
    listaInteresadosInmueble: Array<any>;

}

export const initialInmuebleState: InmuebleState = {
    nuevoInmueble: null,
    listaInmuebles: null,
    listaInteresadosInmueble: null
};
