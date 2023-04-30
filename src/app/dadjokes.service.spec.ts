import { TestBed, inject } from '@angular/core/testing';

import { DadjokesService } from './dadjokes.service';

describe('DadjokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadjokesService]
    });
  });

  it('should be created', inject([DadjokesService], (service: DadjokesService) => {
    expect(service).toBeTruthy();
  }));
});
