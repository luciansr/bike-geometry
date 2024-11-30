import { TestBed } from '@angular/core/testing';

import { BikerPositioningService } from '../../../biker-positioning.service';

describe('BikerPositioningService', () => {
  let service: BikerPositioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikerPositioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
