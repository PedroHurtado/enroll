import { TestBed } from '@angular/core/testing';

import { AutoguardService } from './autoguard.service';

describe('AutoguardService', () => {
  let service: AutoguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
