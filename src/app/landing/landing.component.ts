import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
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
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {}

  onCreateClick() {
    this.service.setRef();
    this.service.setValue('owner', this.service.getUserId());
    this.service.setValue('mode', this.mode);
    this.service.removeOnDisconnect();
    this.router.navigate(['/editor']);
  }

  onJoinClick() {
    this.service.findKey(this.key, () => {
      this.service.setRef(this.key);
      this.router.navigate(['/editor']);
    }, () => {
      this.snackBar.open('workspace not found', 'OK', { duration: 5000 });
    });
  }

}
