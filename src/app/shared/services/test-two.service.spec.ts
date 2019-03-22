import { TestBed } from '@angular/core/testing';

import { TestTwoService } from './test-two.service';

describe('TestTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestTwoService = TestBed.get(TestTwoService);
    expect(service).toBeTruthy();
  });
});
