import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './auth/auth.component';
import { MatTableModule } from '@angular/material/table';
import { PatientInfoComponent } from './home/patient-info/patient-info.component';
import { RecommendedAppointmentsComponent } from './recommended-appointments/recommended-appointments.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatStepperModule } from '@angular/material/stepper';
import { PatientScheduleAppointmentComponent } from './home/patient-schedule-appointment/patient-schedule-appointment.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AdsComponent } from './ads/ads.component';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSliderModule } from 'src/app/imageSlider/imageSlider.module';
import { Ads1Component } from './ads1/ads1.component';
import { FeedbackComponent } from './home/feedback/feedback.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    PatientInfoComponent,
    RecommendedAppointmentsComponent,
    PatientScheduleAppointmentComponent,
    AdsComponent,
    Ads1Component,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    AppRoutingModule,
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
    BrowserModule,
    MatTableModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    IgxCarouselModule,
    IgxSliderModule,
    BrowserModule,
	  BrowserAnimationsModule,
    ImageSliderModule
  ]
})
export class PagesModule { }
