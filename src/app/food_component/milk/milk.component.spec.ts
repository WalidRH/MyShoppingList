import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkComponent } from './milk.component';

describe('MilkComponent', () => {
  let component: MilkComponent;
  let fixture: ComponentFixture<MilkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
