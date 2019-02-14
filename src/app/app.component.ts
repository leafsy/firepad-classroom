import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { Mode } from './models';
import * as firebase from 'firebase';
import * as Firepad from 'firepad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

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
  userId : number = Math.floor(Math.random() * 9999999999);

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

    //// Get Firebase Database reference.
    let ref = firebase.database().ref();
    let hash = window.location.hash.replace(/#/g, '');
    if (hash) {
      this.ref = ref.child(hash);
      console.log(ref);
    } else {
      this.ref = ref.push();
      window.location.href = window.location.href + '#' + ref.key;
    }
  }

  selectedModeChange(mode) {
    this.selectedMode = mode;
  }

  selectedThemeChange(theme) {
    this.selectedTheme = theme;
  }

  fontSizeChange(size) {
    this.options = { ...this.options, fontSize: size };
  }

  ngAfterViewInit() {
    Firepad.fromACE(this.ref, this.aceEditor.getEditor(), {
      userId: this.userId,
      defaultText: 'function go() {\n  var message = "Hello, world.";\n}'
    });
  }

}
