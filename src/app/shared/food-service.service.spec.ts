import { TestBed } from '@angular/core/testing';

import { FoodServiceService } from './food-service.service';

describe('FoodServiceService', () => {
  let service: FoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
