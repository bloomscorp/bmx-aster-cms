import { TestBed } from '@angular/core/testing';

import { AbstractProductListingService } from './abstract-product-listing.service';

describe('AbstractProductListingService', () => {
  let service: AbstractProductListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractProductListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
