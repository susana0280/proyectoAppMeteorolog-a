import { TestBed } from '@angular/core/testing';

import { WheatherServiceService } from './wheather-service.service';

describe('WheatherServiceService', () => {
  let service: WheatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
