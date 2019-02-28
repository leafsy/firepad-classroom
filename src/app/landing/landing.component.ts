import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Mode } from '../models';
import { allModes } from '../templates';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  modes : Mode[] = allModes;
  mode : string = 'python';
  key : string = '';

  constructor(
  	private router: Router,
  	private service: FirebaseService,
  ) {}

  ngOnInit() {}

  onCreateClick() {
    this.service.setRef();
    this.service.setValue('owner', this.service.getUserId());
    this.service.setValue('mode', this.mode);
    this.service.getRef().onDisconnect().remove();
    this.router.navigate(['/editor']);
  }

  onJoinClick() {
    this.service.findKey(this.key, () => {
      this.service.setRef(this.key);
      this.router.navigate(['/editor']);
    }, () => {

    });
  }

}
