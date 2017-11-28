import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { environment } from '../../environments/environment';
import {RawTx} from "../models/rawTx";


@Injectable()
export class EthereumService {
  constructor(private http: Http) { }
  createEth() {
    return this.http.get(environment.apiUrl + '/create');
  }
  checkBalance(key: String) {
    return this.http.get(environment.apiUrl + '/balance/' + key);
  }
  sendTx(rawTx: RawTx) {
    return this.http.post(`${environment.apiUrl}/transaction`, rawTx);
  }
}
