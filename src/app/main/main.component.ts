import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { Mode } from '../models';
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

  modes : Mode[] = [
    { name: 'C/C++', value: 'c_cpp' },
    { name: 'C#', value: 'csp' },
    { name: 'HTML', value: 'html' },
    { name: 'Java', value: 'java' },
    { name: 'JavaScript', value: 'javascript' },
    { name: 'LaTeX', value: 'latex' },
    { name: 'MATLAB', value: 'matlab' },
    { name: 'OCaml', value: 'ocaml' },
    { name: 'PHP', value: 'php' },
    { name: 'Python', value: 'python' },
    { name: 'R', value: 'r' },
    { name: 'SQL', value: 'sql' },
    { name: 'Swift', value: 'swift' },
    { name: 'Text', value: 'text' },
  ];

  themes : any = {
    light: ['chrome', 'eclipse', 'xcode'],
    dark: ['cobalt', 'monokai', 'terminal'],
  };

  selectedMode : string = 'python';
  selectedTheme : string = 'chrome';

  options : any = {
    fontSize: 15,
    printMargin: false,
    scrollPastEnd: 0.5,
  };

  ref : firebase.database.Reference;
  userId : string = Math.floor(Math.random() * 9999999999).toString();
  ownerId : string = '';
  activeUser : string = '';

  constructor() { }

  ngOnInit() {
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
    let hash = window.location.hash.replace(/#/g, '');
    if (hash) {
      this.ref = this.ref.child(hash);
      this.ref.child('owner').once('value', snapshot => {
        this.ownerId = snapshot.val();
      });
    } else {
      this.ref = this.ref.push();
      window.location.href = window.location.href + '#' + this.ref.key;
      this.ownerId = this.userId;
      this.ref. onDisconnect().remove();
      this.ref.child('owner').set(this.userId);
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
    Firepad.fromACE(this.ref, this.aceEditor.getEditor(), {
      userId: this.userId,
      defaultText: 'function go() {\n  var message = "Hello, world.";\n}'
    });
  }

  setActiveUser(id : string) {
    if (this.ownerId === this.userId) {
      this.ref.child('activeUser').set(id === this.activeUser? '' : id);
    }
  }

}
