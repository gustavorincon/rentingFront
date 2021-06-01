import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Inmueble } from '../../shared/model/inmueble.model';
import { InmuebleService } from '../../shared/services/inmueble.service';
import { registrarInmueble, registrarInmuebleSuccess } from '../actions/inmuble.actions';

@Injectable()
export class InmuebleEffects {

    constructor(private actions$: Actions,
                private inmuebleService: InmuebleService){}


@Effect()
saveInmueble$: Observable<Action> = this.actions$.pipe(
      ofType(registrarInmueble),
      mergeMap(action => {
        return this.inmuebleService.saveInmueble(action.inmueble).pipe(
          map((inmueble: Inmueble) => {
            return registrarInmuebleSuccess({ inmueble });
          }),
          catchError(error => {
            return EMPTY;
          })
        );
      })
    );


}
