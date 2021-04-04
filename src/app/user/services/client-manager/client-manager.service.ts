import { Injectable } from '@angular/core';
import { Client, IClient } from '../../shared/models/client.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientManagerService {
  private urlBase = 'https://23j9ok8564.execute-api.us-east-1.amazonaws.com/qa/clients'

  //https://23j9ok8564.execute-api.us-east-1.amazonaws.com/qa/clients/C1116237362'

  constructor(private _http : HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  create(client: Client){
    console.log("client => ",client)
    return this._http.post(this.urlBase,client).pipe(
      catchError(this.handleError)
    )
  }

  
  get(id: string): Observable<IClient>{    
    const url = `${ this.urlBase }/${ id }`;
    return this._http.get<IClient>(url)
  }

  update(client: Client){

  }

}
