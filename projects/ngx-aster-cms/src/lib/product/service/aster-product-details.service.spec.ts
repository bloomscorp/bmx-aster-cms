import { TestBed } from '@angular/core/testing';

import { AsterProductDetailsService } from './aster-product-details.service';

describe('AsterProductDetailsService', () => {
  let service: AsterProductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
