import { TestBed } from '@angular/core/testing';

import { UnsearchedTermGuard } from './unsearched-term.guard';

describe('UnsearchedTermGuard', () => {
  let guard: UnsearchedTermGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsearchedTermGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
