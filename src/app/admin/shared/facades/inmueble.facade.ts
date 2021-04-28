import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { BaseFacade } from './base-facade';


@Injectable({
    providedIn: 'root',
  })
  export class InmuebleFacade extends BaseFacade {
    constructor(protected store: Store<AppState>) {
        super(store);
    }
  }
