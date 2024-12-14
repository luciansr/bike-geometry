import { TestBed } from '@angular/core/testing';

import { CyclistSizingDataService } from './cyclist-sizing-data.service';

describe('CyclistSizingDataService', () => {
  let service: CyclistSizingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclistSizingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
