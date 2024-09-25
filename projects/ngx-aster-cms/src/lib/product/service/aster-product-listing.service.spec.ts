import { TestBed } from '@angular/core/testing';

import { AsterProductListingService } from './aster-product-listing.service';

describe('AsterProductListingService', () => {
  let service: AsterProductListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterProductListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
