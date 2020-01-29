import { TestBed } from '@angular/core/testing';

import { HtaBounderiesService } from './hta-bounderies.service';

describe('HtaBounderiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtaBounderiesService = TestBed.get(HtaBounderiesService);
    expect(service).toBeTruthy();
  });
});
