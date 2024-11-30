import { TestBed } from '@angular/core/testing';

import { SvgScaleService } from './svg-scale.service';

describe('SvgScaleService', () => {
  let service: SvgScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
