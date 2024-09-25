import { TestBed } from '@angular/core/testing';

import { AbstractProductDetailsService } from './abstract-product-details.service';

describe('AbstractProductDetailsService', () => {
  let service: AbstractProductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
