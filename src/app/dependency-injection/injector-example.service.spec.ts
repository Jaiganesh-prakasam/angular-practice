import { TestBed } from '@angular/core/testing';

import { InjectorExampleService } from './injector-example.service';

describe('InjectorExampleService', () => {
  let service: InjectorExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectorExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
