import {TestBed} from '@angular/core/testing';

import {TransmissionHelperService} from './transmission-helper.service';

describe('TransmissionHelperService', () => {
  let service: TransmissionHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
