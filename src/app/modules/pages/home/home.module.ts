import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNavComponent } from './pages/home-nav/home-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RecommendedAppointmentsComponent } from './pages/recommended-appointments/recommended-appointments.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { PatientScheduleAppointmentComponent } from './pages/patient-schedule-appointment/patient-schedule-appointment.component';
import { HomeComponent } from './home.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { Ads1Component } from './pages/ads1/ads1.component';
import { ImageSliderModule } from 'src/app/imageSlider/imageSlider.module';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    FeedbackComponent,
    RecommendedAppointmentsComponent,
    PatientInfoComponent,
    PatientScheduleAppointmentComponent,
    Ads1Component,
    PatientHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImageSliderModule,
    MatListModule,
    MatSidenavModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MaterialModule,
    MatTableModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class HomeModule { }
