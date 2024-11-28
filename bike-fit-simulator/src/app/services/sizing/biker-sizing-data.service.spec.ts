import { TestBed } from '@angular/core/testing';

import { BikerSizingDataService } from './biker-sizing-data.service';

describe('BikerSizingDataService', () => {
  let service: BikerSizingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikerSizingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
