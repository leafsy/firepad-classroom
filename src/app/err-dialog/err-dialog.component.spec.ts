import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrDialogComponent } from './err-dialog.component';

describe('ErrDialogComponent', () => {
  let component: ErrDialogComponent;
  let fixture: ComponentFixture<ErrDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
