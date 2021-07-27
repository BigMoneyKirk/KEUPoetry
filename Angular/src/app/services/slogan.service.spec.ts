import { TestBed } from '@angular/core/testing';

import { SloganService } from './slogan.service';

describe('SloganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SloganService = TestBed.get(SloganService);
    expect(service).toBeTruthy();
  });
});
