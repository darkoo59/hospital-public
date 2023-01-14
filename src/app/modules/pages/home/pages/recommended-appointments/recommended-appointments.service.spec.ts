import { TestBed } from '@angular/core/testing';

import { RecommendedAppointmentsService } from './recommended-appointments.service';

describe('RecommendedAppointmentsService', () => {
  let service: RecommendedAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
