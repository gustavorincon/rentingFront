import { TestBed } from '@angular/core/testing';

import { FormValidators } from './form-validators.service';

describe('FormValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormValidators = TestBed.get(
      FormValidators
    );
    expect(service).toBeTruthy();
  });
});
