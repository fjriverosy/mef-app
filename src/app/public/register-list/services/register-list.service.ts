import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Register } from '../models/register.model';

@Injectable()
export class RegisterListService {
  registers: Array<Register> = [];


  constructor(private _http: Http) {

  }

  // tslint:disable-next-line:one-line
  getAll(): Observable<Array<Register>> {
    const url = 'http://localhost:9000/registers';
    /*en caso de solicitar headers se debe aplicar:
      const headers = new Headers ({'Content-Type' : 'application/json'});
      const options = new RequestOptions({headers : headers}); */
    return this._http.get(url /*, options*/).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  getByName(register: Register): Observable<Array<Register>> {
    // const url = 'http://localhost:9000/registers/name/' + name;
    const url = 'http://localhost:9000/registers/namelimited/' + register.nombre;
    return this._http.get(url).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  getByExactName(register: Register): Observable<Array<Register>> {
    const url = 'http://localhost:9000/registers/exactname/' + register.nombre;
    return this._http.get(url).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  getXlsByName(register: Register): Observable<Array<Register>> {
    const url = 'http://localhost:9000/registers/exportnamexls/' + register.nombre;
    return this._http.get(url).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  getByDni(register: Register): Observable<Array<Register>> {
    // const url = 'http://localhost:9000/registers/dni/' + dni;
    const url = 'http://localhost:9000/registers/dnilimited/' + register.dni;
    return this._http.get(url).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  getXlsByDni(register: Register): Observable<Array<Register>> {
    // console.log(register.dni);
    const url = 'http://localhost:9000/registers/exportdnixls/' + register.dni;
    return this._http.get(url).map((response) => {
      console.log(response);
      return response.json();
    });
  }
}
