import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { PathConstantes } from 'src/app/shared/constants/constants-path';
import { ILocation } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }


/**
 * filterByCode
 */
  getAllCities(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>('https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=1500');
  }


}
