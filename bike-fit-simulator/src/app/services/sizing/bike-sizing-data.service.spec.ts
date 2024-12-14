import { TestBed } from '@angular/core/testing';

import { BikeSizingDataService } from './bike-sizing-data.service';

describe('BikeSizingDataService', () => {
  let service: BikeSizingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeSizingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
