import { Inmueble } from '../../shared/model/inmueble.model';



export interface InmuebleState {
    nuevoInmueble: Inmueble;

}

export const initialInmuebleState: InmuebleState = {
    nuevoInmueble: null
};