import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  mode : string = '';
  key : string = '';

  constructor() { }

  ngOnInit() {
  }

}
