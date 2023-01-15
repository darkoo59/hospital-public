import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { PatientScheduleAppointmentComponent } from './pages/patient-schedule-appointment/patient-schedule-appointment.component';
import { RecommendedAppointmentsComponent } from './pages/recommended-appointments/recommended-appointments.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'patient-home',
        component: PatientHomeComponent
      },{
        path: 'patient-info',
        component: PatientInfoComponent
      },
      {
        path: 'schedule-appointment',
        component: PatientScheduleAppointmentComponent
      },
      {
        path: 'recommended-appointments',
        component: RecommendedAppointmentsComponent
      },
      {
        path: 'create-feedback',
        component: FeedbackComponent
      },
      { path: '**', redirectTo: 'patient-home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
