import { TestBed } from '@angular/core/testing';

import { AsterConfigurationService } from './aster-configuration.service';

describe('AsterConfigurationService', () => {
  let service: AsterConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
