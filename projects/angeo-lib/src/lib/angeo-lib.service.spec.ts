import { TestBed } from '@angular/core/testing';

import { AngeoLibService } from './angeo-lib.service';

describe('AngeoLibService', () => {
  let service: AngeoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngeoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
