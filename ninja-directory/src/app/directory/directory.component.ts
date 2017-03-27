import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.ninja = this.route.snapshot.params['ninja'];
  }

}
