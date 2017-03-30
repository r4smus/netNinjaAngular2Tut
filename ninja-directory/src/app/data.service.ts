import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://nn-angular-a9205.firebaseio.com/.json').map(
      (res) => res.json()
    )
  }

  fetchPersons(){
    return this.http.get('http://localhost:8080/personList').map(
      (res) => res.json()
    )
  }

}
