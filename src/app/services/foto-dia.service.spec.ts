import { TestBed } from '@angular/core/testing';

import { FotoDiaService } from './foto-dia.service';

describe('FotoDiaService', () => {
  let service: FotoDiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoDiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
