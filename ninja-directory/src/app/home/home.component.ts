import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle: string = "Welcome to the homepage...";
  myString: string = "I like chicken!";
  myBoolean: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  alertMe(val: string){
    alert(val);
  }

}
