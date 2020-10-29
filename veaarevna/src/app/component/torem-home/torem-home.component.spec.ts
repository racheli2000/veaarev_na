import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToremHomeComponent } from './torem-home.component';

describe('ToremHomeComponent', () => {
  let component: ToremHomeComponent;
  let fixture: ComponentFixture<ToremHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToremHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToremHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
