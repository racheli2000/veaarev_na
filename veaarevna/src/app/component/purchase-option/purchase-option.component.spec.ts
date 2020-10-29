import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOptionComponent } from './purchase-option.component';

describe('PurchaseOptionComponent', () => {
  let component: PurchaseOptionComponent;
  let fixture: ComponentFixture<PurchaseOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
