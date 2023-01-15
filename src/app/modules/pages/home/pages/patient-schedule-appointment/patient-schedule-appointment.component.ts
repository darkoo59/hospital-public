import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { UserDataService } from '../../../login/log-user-data.service';
import { PatientScheduleAppointmentService, EventSchedule, Specialization, Appointment, Doctor } from '../../services/patient-schedule-appointment.service';
interface DoctorBranch {
  value: string;
  viewValue: string;
}

interface AppointmentTemp {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient-schedule-appointment',
  templateUrl: './patient-schedule-appointment.component.html',
  styleUrls: ['./patient-schedule-appointment.component.css']
})
export class PatientScheduleAppointmentComponent implements OnInit {

  specializationId : number = 0;

  appointment : Appointment = {
    patientId : 0,
    date : new Date(),
    doctorId : 0,
    time : ''
  };

  time : string = '';

  minDate: Date | undefined;
  maxDate: Date | undefined;
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  isLinear = true;

  docBrs: Specialization[] = [];

  doctors: Doctor[] = [];

  apps: string[] = [];

  firstForm: EventSchedule = {
    id : 1,
    dates : []
  }

  secondForm: EventSchedule = {
    id : 2,
    dates : []
  }


  thirdForm: EventSchedule = {
    id : 3,
    dates : []
  }

  fourthForm: EventSchedule = {
    id : 4,
    dates : []
  }

  constructor(private _formBuilder: FormBuilder, private _snackBar : MatSnackBar, private _scheduleService : PatientScheduleAppointmentService,private _userService : UserDataService) {
    const currentYear = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.minDate.getMonth()+6);

  }

  ngOnInit() {
    this.firstForm.dates.push(new Date());
    this._userService.m_UserData$.pipe(tap(user_data => {
      if(user_data?.UserId)this.appointment.patientId = user_data?.UserId;
    })).subscribe();
  }

  public scheduleAppointment(){
    this.fourthForm.dates.push(new Date());
    const schedules : EventSchedule[] = [];
    schedules.push(this.firstForm);
    schedules.push(this.secondForm);
    schedules.push(this.thirdForm);
    schedules.push(this.fourthForm);
    
    console.log(this.appointment)

    this._scheduleService.createAppointment(this.appointment).subscribe(res => {
      
      this._snackBar.open("Appointment succesfully scheduled.", "Ok");
      setTimeout(() => {
        window.location.href="http://localhost:4200/home"
      }, 
      3000);

    });
  }
  public firstNext(){
    this.firstForm.dates.push(new Date());
    this.secondForm.dates.push(new Date());
    console.log(this.appointment.date)
    this._scheduleService.getSpecializations().subscribe(res => {
      this.docBrs = res;
    })
  }

  public secondNext(){
    this.secondForm.dates.push(new Date());
    this.thirdForm.dates.push(new Date());
    this._scheduleService.getDoctors(this.specializationId).subscribe(res => {
      this.doctors = res;
    });
  }

  public thirdNext(){
    this.thirdForm.dates.push(new Date());
    this.fourthForm.dates.push(new Date());
    this._scheduleService.getAvailableAppointments(this.appointment).subscribe(res => {
      this.apps = res;
    });
  }

  public firstBack(){
    this.firstForm.dates.push(new Date());
    this.secondForm.dates.push(new Date());
  }

  public secondBack(){
    this.secondForm.dates.push(new Date());
    this.thirdForm.dates.push(new Date());
  }

  public thirdBack(){
    this.thirdForm.dates.push(new Date());
    this.fourthForm.dates.push(new Date());
  }

  public scheduleAppointmentSystem(){
    window.location.href="http://localhost:4200/home/recommended-appointments"
  }

}
