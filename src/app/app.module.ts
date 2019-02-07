import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditorPrefComponent } from './editor-pref/editor-pref.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditorPrefComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    AceEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
