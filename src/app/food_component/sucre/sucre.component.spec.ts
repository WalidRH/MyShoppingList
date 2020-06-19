import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucreComponent } from './sucre.component';

describe('SucreComponent', () => {
  let component: SucreComponent;
  let fixture: ComponentFixture<SucreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
