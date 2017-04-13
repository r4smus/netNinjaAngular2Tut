import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Person } from './person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [DataService]
})
export class PersonsComponent implements OnInit {
  persons: Person[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchPersons().subscribe(
     (data) => this.persons = data 
    );
  }

  add(firstName: string, lastName: string) {
    firstName = firstName.trim();
    lastName = lastName.trim();
    //if (!firstName || !lastName) { return; }
    this.dataService.createPerson(firstName,lastName);
  }

}
