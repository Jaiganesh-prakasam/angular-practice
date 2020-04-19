import { TestBed } from '@angular/core/testing';

import { AlwaysAuthGuard } from './always-auth.guard';

describe('AlwaysAuthGuard', () => {
  let guard: AlwaysAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlwaysAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
