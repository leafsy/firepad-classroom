import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mode } from '../models';

@Component({
  selector: 'app-editor-pref',
  templateUrl: './editor-pref.component.html',
  styleUrls: ['./editor-pref.component.less']
})
export class EditorPrefComponent implements OnInit {

  @Input() modes: Mode[];
  @Input() selectedMode: string;
  @Output() selectedModeChange = new EventEmitter();

  @Input() themes: any;
  @Input() selectedTheme: string;
  @Output() selectedThemeChange = new EventEmitter();

  @Input() fontSize: number;
  @Output() fontSizeChange = new EventEmitter();

  minFontSize = 10;
  maxFontSize = 30;

  constructor() { }

  ngOnInit() { }

  modeChange() {
    this.selectedModeChange.emit(this.selectedMode);
  }

  themeChange() {
    this.selectedThemeChange.emit(this.selectedTheme);
  }

  sizeChange(e) {
    const n = Number(e.target.value);
    if (n >= this.minFontSize && n <= this.maxFontSize) {
      this.fontSize = n;
      this.fontSizeChange.emit(this.fontSize);
    }
  }

}
