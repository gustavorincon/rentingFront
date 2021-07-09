import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IFilterPropertyDto } from '../model/filter-property-dto';
import { PathConstantes } from 'src/app/shared/constants/constants-path';
import { IProperty } from '../../../shared/models/property.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

 /**
  * filterBy: Dependiendo de la cantidad de filter que lleguen por
  * query parameters entonces ejecutará el Get
  */
  filterBy(filter: IFilterPropertyDto): Observable<IProperty[]> {
    const url = `${ PathConstantes.ASSET_API }/${ filter.city }`;
    const data = {rentingprice: `${filter.rentingPrice}`,
    locations: '', type: filter.type, area: `${filter.area}`,
    furnished: `${filter.furnished}`, rooms: `${filter.rooms}`,
    bathrooms: filter.bathrooms + '', parkings: `${filter.parkings}`};
    console.log('data url ', data );
    return this._http.get<IProperty[]>(url, {params: data});
  }

/**
 * filterByCode
 */
  filterByCode(code: string): Observable<IProperty> {
    return this._http.get<IProperty>(`${ PathConstantes.ASSET_API }/${ code }`);
  }


}
