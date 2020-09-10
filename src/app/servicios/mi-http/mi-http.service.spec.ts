import { TestBed } from '@angular/core/testing';

import { MiHttpService } from './mi-http.service';

describe('MiHttpService', () => {
  let service: MiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
