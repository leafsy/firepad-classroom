import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AceEditorComponent } from 'ng2-ace-editor';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { Mode } from '../models';
import { allModes } from '../templates';
import * as firebase from 'firebase';
import * as Firepad from 'firepad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  @ViewChild('AceEditor') aceEditor : AceEditorComponent;

  modes : Mode[] = allModes;

  themes : any = {
    light: ['chrome', 'eclipse', 'xcode'],
    dark: ['cobalt', 'monokai', 'terminal'],
  };

  selectedMode : string = 'python';
  selectedTheme : string = 'chrome';

  options : any = {
    fontSize: 15,
    tabSize: 2,
    useSoftTabs: true,
    printMargin: false,
    scrollPastEnd: 0.5,
  };

  ref : firebase.database.Reference;
  userId : string = Math.floor(Math.random() * 9999999999).toString();
  ownerId : string = '';
  activeUser : string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const presetMode = this.route.snapshot.queryParamMap.get('mode');
    if (presetMode) {
      this.selectedMode = presetMode;
    }

    const config = {
      apiKey: "AIzaSyATUWj7WlsBhBIvr829TNawyCE0WOMHMEE",
      authDomain: "firepad-classroom.firebaseapp.com",
      databaseURL: "https://firepad-classroom.firebaseio.com",
      projectId: "firepad-classroom",
      storageBucket: "firepad-classroom.appspot.com",
      messagingSenderId: "122988522958"
    };

    firebase.initializeApp(config);

    // Get Firebase Database reference.
    this.ref = firebase.database().ref();
    let key = this.route.snapshot.queryParamMap.get('key');
    if (key) {
      this.ref = this.ref.child(key);
      this.ref.child('owner').once('value', snapshot => {
        this.ownerId = snapshot.val();
      });
      this.ref.child('mode').once('value', snapshot => {
        this.selectedMode = snapshot.val();
      });
    } else {
      this.ref = this.ref.push();
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { key: this.ref.key },
        queryParamsHandling: 'merge'
      });
      this.ownerId = this.userId;
      this.ref. onDisconnect().remove();
      this.ref.child('owner').set(this.userId);
      this.ref.child('mode').set(this.selectedMode);
    }

    this.ref.child('activeUser').on('value', snapshot => {
      this.activeUser = snapshot.val();
    });
  }

  setSelectedMode(mode) {
    this.selectedMode = mode;
  }

  setSelectedTheme(theme : string) {
    this.selectedTheme = theme;
  }

  setFontSize(size : number) {
    this.options = { ...this.options, fontSize: size };
  }

  ngAfterViewInit() {
    const mode : Mode = this.modes.find(mode => {
      return mode.value === this.selectedMode;
    });
    Firepad.fromACE(this.ref, this.aceEditor.getEditor(), {
      userId: this.userId,
      defaultText: mode? mode.template : '',
    });
  }

  setActiveUser(id : string) {
    if (this.ownerId === this.userId) {
      this.ref.child('activeUser').set(id === this.activeUser? '' : id);
    }
  }

}
