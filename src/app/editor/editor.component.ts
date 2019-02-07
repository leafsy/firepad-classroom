import { Component, OnInit, ViewChild } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import * as firebase from 'firebase';
import * as Firepad from 'firepad';

export interface Mode {
  name: string;
  value: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  @ViewChild('AceEditor') aceEditor : AceEditorComponent;

  modes : Mode[] = [
    { name: 'C/C++', value: 'c_cpp' },
    { name: 'C#', value: 'csp' },
    { name: 'HTML', value: 'html' },
    { name: 'Java', value: 'java' },
    { name: 'JavaScript', value: 'javascript' },
    { name: 'LaTeX', value: 'latex' },
    { name: 'Markdown', value: 'markdown' },
    { name: 'MATLAB', value: 'matlab' },
    { name: 'OCaml', value: 'ocaml' },
    { name: 'PHP', value: 'php' },
    { name: 'Python', value: 'python' },
    { name: 'SQL', value: 'sql' },
    { name: 'Swift', value: 'swift' },
    { name: 'R', value: 'r' },
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

  constructor() { }

  ngOnInit() { }

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
      ref = ref.child(hash);
    } else {
      ref = ref.push();
      window.location.href = window.location.href + '#' + ref.key;
    }

    // Create Firepad.
    const editor = this.aceEditor.getEditor();
    const firepad = Firepad.fromACE(ref, editor, {
      defaultText: 'function go() {\n  var message = "Hello, world.";\n}'
    });

  }

}
