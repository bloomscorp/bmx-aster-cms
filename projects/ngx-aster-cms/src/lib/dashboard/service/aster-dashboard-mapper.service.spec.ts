import { TestBed } from '@angular/core/testing';

import { AsterDashboardMapperService } from './aster-dashboard-mapper.service';

describe('AsterDashboardMapperService', () => {
  let service: AsterDashboardMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterDashboardMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
