import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDrawer } from '@angular/material';
import { AceEditorComponent } from 'ng2-ace-editor';
import { KeyDialogComponent } from '../key-dialog/key-dialog.component';
import { ErrDialogComponent } from '../err-dialog/err-dialog.component';
import { FirebaseService } from '../../services/firebase.service';
import { Mode } from '../models';
import { allModes } from '../templates';
import * as Firepad from 'firepad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  @ViewChild('AceEditor') aceEditor : AceEditorComponent;
  @ViewChild('drawer') drawer : MatDrawer;

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
    private dialog: MatDialog,
  ) {
    this.userId = this.service.getUserId();
  }

  ngOnInit() {
    this.service.onceValue('owner', val => this.ownerId = val);
    this.service.onceValue('mode', val => this.selectedMode = val);
    this.service.onValue('activeUser', val => this.activeUser = val);
    this.aceEditor.getEditor().renderer.setScrollMargin(10, 10);
    this.drawer.open();
  }

  ngAfterViewInit() {
    if (this.service.getRef()) {
      const mode : Mode = this.modes.find(mode => {
        return mode.value === this.selectedMode;
      });
      Firepad.fromACE(this.service.getRef(), this.aceEditor.getEditor(), {
        userId: this.userId,
        defaultText: mode? mode.template : '',
      });
    } else {
      setTimeout(() => this.openErrDialog());
    }
  }

  openKeyDialog() {
    this.dialog.open(KeyDialogComponent, {
      width: '500px',
      data: { key: this.service.getRefKey() }
    });
  }

  openErrDialog() {
    this.dialog.open(ErrDialogComponent, {
      width: '500px',
      disableClose: true,
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

  setActiveUser(id : string) {
    if (this.ownerId === this.userId) {
      this.service.setValue('activeUser', id === this.activeUser? '' : id);
    }
  }

}
