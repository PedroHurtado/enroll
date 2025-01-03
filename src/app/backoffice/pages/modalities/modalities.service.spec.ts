import { TestBed } from '@angular/core/testing';

import { ModalitiesService } from './modalities.service';

describe('ModalitiesService', () => {
  let service: ModalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
