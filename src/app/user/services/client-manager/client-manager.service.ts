import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientManagerService {
  private urlBase = 'https://23j9ok8564.execute-api.us-east-1.amazonaws.com/qa/clients'

  //https://23j9ok8564.execute-api.us-east-1.amazonaws.com/qa/clients/C1116237362'

  constructor(private _http : HttpClient) { }

  create(client: Client){
    console.log("client => ",client)
  }

  
  get(id: string){
    
    const url = `${ this.urlBase }/${ id }`;
    return this._http.get(url).pipe( map( res => {
      console.log('rest get', res);
      return res;
    }));;

  }

  update(client: Client){

  }

}
