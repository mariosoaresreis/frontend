import { TestBed } from '@angular/core/testing';

import { AlticeService } from './altice.service';

describe('AlticeService', () => {
  let service: AlticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
