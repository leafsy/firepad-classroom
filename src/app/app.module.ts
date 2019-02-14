import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatSelectModule, MatInputModule, MatExpansionModule, MatSidenavModule,
  MatListModule, MatButtonModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { EditorPrefComponent } from './editor-pref/editor-pref.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorPrefComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AceEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
