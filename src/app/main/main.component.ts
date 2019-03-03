import {
  Component, OnInit, AfterViewInit, OnDestroy, ViewChild, HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDrawer } from '@angular/material';
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
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('mainEditor') mainEditor: AceEditorComponent;
  @ViewChild('noteEditor') noteEditor: AceEditorComponent;
  @ViewChild('drawer') drawer: MatDrawer;

  modes: Mode[] = allModes;

  themes: any = {
    light: ['chrome', 'eclipse', 'xcode'],
    dark: ['cobalt', 'monokai', 'terminal'],
  };

  selectedMode = 'python';
  selectedTheme = 'chrome';

  options: any = {
    fontSize: 15,
    tabSize: 2,
    useSoftTabs: true,
    printMargin: false,
    scrollPastEnd: 0.5,
  };

  userId: string;
  ownerId = '';
  activeUser = '';

  constructor(
    private service: FirebaseService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.userId = this.service.getUserId();
  }

  ngOnInit() {
    this.service.onceValue('owner', val => this.ownerId = val);
    this.service.onceValue('mode', val => this.selectedMode = val);
    this.service.onValue('activeUser', val => {
      if (val === this.userId && !this.isActiveUser()) {
        this.snackBar.open('You\'ve been given write permission', 'OK');
      } else if (this.isActiveUser() && val !== this.userId) {
        this.snackBar.open('You no longer have write permission', 'OK');
      }
      this.activeUser = val;
    });
    this.service.refRemoved$.subscribe(() => this.openErrDialog());
    this.mainEditor.getEditor().renderer.setScrollMargin(10, 10);
    this.drawer.open();
  }

  ngAfterViewInit() {
    if (this.service.getRef()) {
      const mode: Mode = this.modes.find(m => m.value === this.selectedMode);
      Firepad.fromACE(this.service.getRef(), this.mainEditor.getEditor(), {
        userId: this.userId,
        defaultText: mode ? mode.contMain : '',
      });
      this.noteEditor.getEditor().setValue(mode ? mode.contNote : '', 1);
      setTimeout(() => this.isOwner() && this.openKeyDialog());
    } else {
      setTimeout(() => this.openErrDialog());
    }
  }

  ngOnDestroy() {
    this.dialog.closeAll();
    this.snackBar.dismiss();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    return !this.isOwner(); // show prompt iff instructor
  }

  resizeEditors() {
    this.mainEditor.getEditor().resize();
    this.noteEditor.getEditor().resize();
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

  navigateToHome() {
    this.router.navigate(['/home'], {
      queryParams: { key: this.service.getRefKey() }
    });
  }

  setSelectedMode(mode) {
    this.selectedMode = mode;
  }

  setSelectedTheme(theme: string) {
    this.selectedTheme = theme;
  }

  setFontSize(size: number) {
    this.options = { ...this.options, fontSize: size };
  }

  isOwner() {
    return this.ownerId && this.ownerId === this.userId;
  }

  isActiveUser() {
    return this.activeUser && this.activeUser === this.userId;
  }

  setActiveUser(id: string) {
    if (this.isOwner()) {
      this.service.setValue('activeUser', id === this.activeUser ? '' : id);
    }
  }

}
