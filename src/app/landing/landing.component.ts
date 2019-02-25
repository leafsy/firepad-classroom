import { Component, OnInit } from '@angular/core';
import { Mode } from '../models';
import { allModes } from '../templates';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  modes : Mode[] = allModes;
  mode : string = '';
  key : string = '';

  constructor() { }

  ngOnInit() {
  }

}
