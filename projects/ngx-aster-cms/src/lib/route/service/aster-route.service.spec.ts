import {TestBed} from '@angular/core/testing';

import {AsterRouteService} from './aster-route.service';

describe('AsterRouteService', () => {
  let service: AsterRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
