import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPrefComponent } from './editor-pref.component';

describe('EditorPrefComponent', () => {
  let component: EditorPrefComponent;
  let fixture: ComponentFixture<EditorPrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
