import { TestBed } from '@angular/core/testing';

import { RestorationService } from './restoration.service';

describe('RestorationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestorationService = TestBed.get(RestorationService);
    expect(service).toBeTruthy();
  });
});
