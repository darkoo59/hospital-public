/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientInfoService } from './patient-info.service';

describe('Service: PatientInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientInfoService]
    });
  });

  it('should ...', inject([PatientInfoService], (service: PatientInfoService) => {
    expect(service).toBeTruthy();
  }));
});
