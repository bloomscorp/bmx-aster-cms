import { TestBed } from '@angular/core/testing';

import { AsterFormTransmissionService } from './aster-form-transmission.service';

describe('AsterFormTransmissionService', () => {
  let service: AsterFormTransmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterFormTransmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
