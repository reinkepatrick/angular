import {Component, OnInit} from '@angular/core';

import {SomeService} from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String;
  buttonClicks = 0;
  numbers = [1, 2, 3, 4, 5];

  constructor(private someService: SomeService) {
  }

  ngOnInit() {
    this.title = this.someService.getTitle();
  }

  event() {
    this.buttonClicks++;
  }

  update(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }
}
