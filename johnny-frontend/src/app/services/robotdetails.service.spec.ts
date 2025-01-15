import { TestBed } from '@angular/core/testing';

import { RobotdetailsService } from './robotdetails.service';

describe('RobotdetailsService', () => {
  let service: RobotdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
