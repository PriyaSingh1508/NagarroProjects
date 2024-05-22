import { TestBed } from '@angular/core/testing';

import { MycomplaintsService } from './mycomplaints.service';

describe('MycomplaintsService', () => {
  let service: MycomplaintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycomplaintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
