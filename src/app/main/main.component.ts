import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AceEditorComponent } from 'ng2-ace-editor';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { FirebaseService } from '../../services/firebase.service';
import { Mode } from '../models';
import { allModes } from '../templates';
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

  userId : string;
  ownerId : string = '';
  activeUser : string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FirebaseService,
  ) {
    this.userId = this.service.getUserId();
  }

  ngOnInit() {
    this.service.onceValue('owner', val => this.ownerId = val);
    this.service.onceValue('mode', val => this.selectedMode = val);
    this.service.onValue('activeUser', val => this.activeUser = val);
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
    Firepad.fromACE(this.service.getRef(), this.aceEditor.getEditor(), {
      userId: this.userId,
      defaultText: mode? mode.template : '',
    });
  }

  setActiveUser(id : string) {
    if (this.ownerId === this.userId) {
      this.service.setValue('activeUser', id === this.activeUser? '' : id);
    }
  }

}
