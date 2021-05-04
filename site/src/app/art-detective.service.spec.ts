import { TestBed } from '@angular/core/testing';

import { ArtDetectiveService } from './art-detective.service';

describe('ArtDetectiveService', () => {
  let service: ArtDetectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtDetectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
