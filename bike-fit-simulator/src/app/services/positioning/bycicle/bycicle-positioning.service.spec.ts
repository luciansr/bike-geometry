import { TestBed } from '@angular/core/testing';

import { ByciclePositioningService } from './bycicle-positioning.service';

describe('ByciclePositioningService', () => {
  let service: ByciclePositioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByciclePositioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
