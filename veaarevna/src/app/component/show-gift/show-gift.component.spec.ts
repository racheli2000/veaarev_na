import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGiftComponent } from './show-gift.component';

describe('ShowGiftComponent', () => {
  let component: ShowGiftComponent;
  let fixture: ComponentFixture<ShowGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
