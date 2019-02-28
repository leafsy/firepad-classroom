import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from '../app/app.component';
import { EditorPrefComponent } from '../app/editor-pref/editor-pref.component';
import { UserPanelComponent } from '../app/user-panel/user-panel.component';
import { MainComponent } from '../app/main/main.component';
import { LandingComponent } from '../app/landing/landing.component';

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
    BrowserAnimationsModule,
    FormsModule,
    AceEditorModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
