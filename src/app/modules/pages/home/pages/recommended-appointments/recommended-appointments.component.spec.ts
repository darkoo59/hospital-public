import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedAppointmentsComponent } from './recommended-appointments.component';

describe('RecommendedAppointmentsComponent', () => {
  let component: RecommendedAppointmentsComponent;
  let fixture: ComponentFixture<RecommendedAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
