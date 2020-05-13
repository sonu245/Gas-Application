import { TestBed } from '@angular/core/testing';

import { ValidateloginService } from './validatelogin.service';

describe('ValidateloginService', () => {
  let service: ValidateloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
