import { TestBed } from '@angular/core/testing';

import { DrugstoreFormService } from './drugstore-form.service';

describe('DrugstoreFormService', () => {
  let service: DrugstoreFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugstoreFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
