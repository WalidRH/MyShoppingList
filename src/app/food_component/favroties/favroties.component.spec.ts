import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrotiesComponent } from './favroties.component';

describe('FavrotiesComponent', () => {
  let component: FavrotiesComponent;
  let fixture: ComponentFixture<FavrotiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavrotiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavrotiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
