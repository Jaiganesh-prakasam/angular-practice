import { TestBed } from '@angular/core/testing';

import { AlwaysAuthChildrenGuard } from './always-auth-children.guard';

describe('AlwaysAuthChildrenGuard', () => {
  let guard: AlwaysAuthChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlwaysAuthChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
