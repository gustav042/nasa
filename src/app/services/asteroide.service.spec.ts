import { TestBed } from '@angular/core/testing';

import { AsteroideService } from './asteroide.service';

describe('AsteroideService', () => {
  let service: AsteroideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
