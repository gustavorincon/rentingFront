import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientManagerService {

  constructor() { }

  create(client: Client){
    console.log("client => ",client)
  }

  
  get(id: string){

  }

  update(client: Client){

  }

}
