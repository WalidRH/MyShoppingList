import { TestBed } from '@angular/core/testing';

import { HttpFoodServiceService } from './http-food-service.service';

describe('HttpFoodServiceService', () => {
  let service: HttpFoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
