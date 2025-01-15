import { TestBed } from '@angular/core/testing';

import { StatusColorService } from './status-color.service';

describe('StatusColorService', () => {
  let service: StatusColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
