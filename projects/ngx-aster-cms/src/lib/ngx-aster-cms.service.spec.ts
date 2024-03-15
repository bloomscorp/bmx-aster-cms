import { TestBed } from '@angular/core/testing';

import { NgxAsterCmsService } from './ngx-aster-cms.service';

describe('NgxAsterCmsService', () => {
  let service: NgxAsterCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAsterCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
