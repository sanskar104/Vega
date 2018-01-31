import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class DataservicService {

  constructor(private http:Http) { }

  fetchData(){
   return this.http.get('/data.json').map(
     (res) => res.json()
   )
  }
}
