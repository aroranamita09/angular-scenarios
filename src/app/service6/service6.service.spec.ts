import { TestBed } from '@angular/core/testing';

import { Service6Service } from './service6.service';

describe('Service6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service6Service = TestBed.get(Service6Service);
    expect(service).toBeTruthy();
  });
});
