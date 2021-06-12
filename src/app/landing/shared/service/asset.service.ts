import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private urlBase = '/qa/clients'
  constructor(private _http : HttpClient) { }

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
  filterBy(): void {
    const url = `${ this.urlBase }/${ id }`;
    return this._http.get<IClient>(url)
  }
  /*
  get(id: string): Observable<IClient>{
    const url = `${ this.urlBase }/${ id }`;
    return this._http.get<IClient>(url)
  }
  getByEmail(email: string): Observable<Boolean>{
    const url = `${ this.urlBase }/email/${ email }`;
    return this._http.get<Boolean>(url)
  }*/
}
