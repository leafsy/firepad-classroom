import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.less']
})
export class TopNavbarComponent implements OnInit {

  @Input() drawerOpen : boolean;
  @Output() homeClick = new EventEmitter();
  @Output() linkClick = new EventEmitter();
  @Output() listClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
