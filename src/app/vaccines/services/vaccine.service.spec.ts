import { TestBed } from '@angular/core/testing';

import { VaccineService } from './vaccine.service';

describe('VaccineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccineService = TestBed.get(VaccineService);
    expect(service).toBeTruthy();
  });
});
