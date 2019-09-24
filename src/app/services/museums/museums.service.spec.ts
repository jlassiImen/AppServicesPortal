import { TestBed } from '@angular/core/testing';

import { MuseumsService } from './museums.service';

describe('MuseumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuseumsService = TestBed.get(MuseumsService);
    expect(service).toBeTruthy();
  });
});
