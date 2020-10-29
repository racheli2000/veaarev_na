import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToremComponent } from './torem.component';

describe('ToremComponent', () => {
  let component: ToremComponent;
  let fixture: ComponentFixture<ToremComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToremComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
