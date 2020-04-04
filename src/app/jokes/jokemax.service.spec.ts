import { TestBed } from '@angular/core/testing';

import { JokemaxService } from './jokemax.service';

describe('JokemaxService', () => {
  let service: JokemaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokemaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
