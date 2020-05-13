import { TestBed } from '@angular/core/testing';

import { PinValidateService } from './pin-validate.service';

describe('PinValidateService', () => {
  let service: PinValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
