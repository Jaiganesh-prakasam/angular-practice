import { TestBed } from '@angular/core/testing';

import { JokelistService } from './jokelist.service';

describe('JokelistService', () => {
  let service: JokelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
