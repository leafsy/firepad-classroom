import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.less']
})
export class TopNavbarComponent implements OnInit {

  @Output() homeClick = new EventEmitter();
  @Output() linkClick = new EventEmitter();
  @Output() listClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
