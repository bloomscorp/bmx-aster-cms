import { TestBed } from '@angular/core/testing';

import { AsterFormService } from './aster-form.service';

describe('AsterFormService', () => {
  let service: AsterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
