import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! WOOOP, WOOP!';
  ninja = {
    name: "Chris",
    belt: "black"
  };

  yell(e){
    alert("Iam yelling.");
    console.log(e);
  }
}
