import { StateGeneral } from 'src/app/store/states/app.state';
import { initialInmuebleState, InmuebleState } from './inmueble.state';


export interface State {
    tramietesInmueble: InmuebleState;
}

export const initialState: State = {
    tramietesInmueble: initialInmuebleState
};


export function getInitialState(): State {
    return initialState;
}

export interface AppState extends StateGeneral {
    inmueble: State;
}
