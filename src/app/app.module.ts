import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { ClipboardModule } from 'ngx-clipboard';
import { AngularSplitModule } from 'angular-split';
import { AppRoutingModule } from '../modules/app-routing.module';
import { MaterialModule } from '../modules/material.module';

import { AppComponent } from './app.component';
import { EditorPrefComponent } from './editor-pref/editor-pref.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { KeyDialogComponent } from './key-dialog/key-dialog.component';
import { ErrDialogComponent } from './err-dialog/err-dialog.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorPrefComponent,
    UserPanelComponent,
    MainComponent,
    LandingComponent,
    KeyDialogComponent,
    ErrDialogComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AceEditorModule,
    ClipboardModule,
    AngularSplitModule.forRoot(),
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    KeyDialogComponent,
    ErrDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
