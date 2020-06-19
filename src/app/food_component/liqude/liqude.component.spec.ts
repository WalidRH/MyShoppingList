import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqudeComponent } from './liqude.component';

describe('LiqudeComponent', () => {
  let component: LiqudeComponent;
  let fixture: ComponentFixture<LiqudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiqudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
