import { TestBed } from '@angular/core/testing';

import { InjectInjectableService } from './inject-injectable.service';

describe('InjectInjectableService', () => {
  let service: InjectInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
