import { TestBed } from '@angular/core/testing';

import { AsterNavigationMapperService } from './aster-navigation-mapper.service';

describe('AsterNavigationMapperService', () => {
  let service: AsterNavigationMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterNavigationMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
