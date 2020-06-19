import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodContentComponent } from './food-content.component';

describe('FoodContentComponent', () => {
  let component: FoodContentComponent;
  let fixture: ComponentFixture<FoodContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
