import { TestBed } from '@angular/core/testing';

import { ProvidersExampleService } from './providers-example.service';

describe('ProvidersExampleService', () => {
  let service: ProvidersExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
