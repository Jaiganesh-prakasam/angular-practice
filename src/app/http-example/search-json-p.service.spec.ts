import { TestBed } from '@angular/core/testing';

import { SearchJsonPService } from './search-json-p.service';

describe('SearchJsonPService', () => {
  let service: SearchJsonPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchJsonPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
