import { TestBed } from '@angular/core/testing';

import { ResolveRouterGuard } from './resolve-router.guard';

describe('ResolveRouterGuard', () => {
  let guard: ResolveRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
