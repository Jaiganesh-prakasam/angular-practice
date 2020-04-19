import { TestBed } from '@angular/core/testing';

import { SomtimesDontLoadChildrenGuard } from './somtimes-dont-load-children.guard';

describe('SomtimesDontLoadChildrenGuard', () => {
  let guard: SomtimesDontLoadChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SomtimesDontLoadChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
