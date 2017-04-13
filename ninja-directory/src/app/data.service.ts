import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Person } from './persons/person';

@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});

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

  createPerson(firstName: string, lastName: string){
    var obj = { "firstName":firstName, "lastName":lastName};
    this.http.post('http://localhost:8080/createPerson', JSON.stringify(obj), { headers: this.headers });
  }

  createPerson2(firstName: string, lastName: string): Promise<Person> {
        var obj = { "firstName":firstName, "lastName":lastName};
        return this.http
            .post('http://localhost:8080/createPerson', JSON.stringify(obj), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
      console.error('An error occured', error); //for demo purpose only
      return Promise.reject(error.message || error);
  }

  

}
