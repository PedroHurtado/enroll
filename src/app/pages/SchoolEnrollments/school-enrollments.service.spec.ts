import { TestBed } from '@angular/core/testing';

import { SchoolEnrollmentsService } from './school-enrollments.service';

describe('SchoolEnrollmentsService', () => {
  let service: SchoolEnrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolEnrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
