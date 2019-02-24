import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatSelectModule, MatInputModule, MatExpansionModule, MatSidenavModule,
  MatListModule, MatButtonModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { EditorPrefComponent } from './editor-pref/editor-pref.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorPrefComponent,
    UserPanelComponent,
    MainComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
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
