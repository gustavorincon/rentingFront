import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmueble } from '../model/inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private httpClient: HttpClient) { }



  saveInmueble(
    request: Inmueble
  ): Observable<Inmueble> {
    return this.httpClient.post<Inmueble>(
      `/cita/disponibilidad`,
      request
    );
  }
  getlistaInmuebles(
    request: Inmueble
  ): Observable<Inmueble> {
    return this.httpClient.post<Inmueble>(
      `/cita/disponibilidad`,
      request
    );
  }

  getlistainteresadosInmuebles(
    request: Inmueble
  ): Observable<Inmueble> {
    return this.httpClient.post<Inmueble>(
      `/cita/disponibilidad`,
      request
    );
  }
}
