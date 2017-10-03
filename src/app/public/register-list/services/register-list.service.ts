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
    // const headers = new Headers ({'Content-Type' : 'application/json'});
    // const options = new RequestOptions({headers : headers});
    return this._http.get(url /*, options*/).map((response) => {
      console.log(response);
      return response.json();
    });


  }
}
