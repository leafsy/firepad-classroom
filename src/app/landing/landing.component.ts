import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatButtonToggleGroup } from '@angular/material';
import { FirebaseService } from '../../services/firebase.service';
import { Mode, UserType } from '../models';
import { allModes } from '../templates';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  @ViewChild('group') toggleGroup: MatButtonToggleGroup;

  modes: Mode[] = allModes;
  mode = 'python';
  key = '';
  UserType = UserType;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FirebaseService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    const key = this.route.snapshot.queryParamMap.get('key');
    if (key) {
      this.key = key;
      this.toggleGroup.value = UserType.Student;
    }
  }

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
