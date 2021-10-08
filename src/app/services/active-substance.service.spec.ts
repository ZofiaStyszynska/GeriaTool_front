import { TestBed } from '@angular/core/testing';

import { ActiveSubstanceService } from './active-substance.service';

describe('ActiveSubstanceService', () => {
  let service: ActiveSubstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveSubstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
