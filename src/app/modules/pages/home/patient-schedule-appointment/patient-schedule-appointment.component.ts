import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DoctorBranch {
  value: string;
  viewValue: string;
}

interface Doctor {
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

  docBrs: DoctorBranch[] = [
    {value: 'General practitioners', viewValue: 'General practitioners'},
    {value: 'Emergency medicine', viewValue: 'Emergency medicine'},
    {value: 'Dermatologists', viewValue: 'Dermatologists'},
  ];

  doctors: Doctor[] = [
    {value: 'vukasin-0', viewValue: 'Dr Vukašin Vukašinović'},
    {value: 'anamarija-1', viewValue: 'Dr Anamarija Marijanović'},
    {value: 'arsenije-2', viewValue: 'Dr Aresnije Arsenović'},
    {value: 'magdalena-3', viewValue: 'Dr Magdalena Magdalenović'},
    {value: 'vasilije-4', viewValue: 'Dr Vasilije Vasilić'},
    {value: 'viktorija-5', viewValue: 'Dr Viktorija Viktorinović'},
  ];

  apps: AppointmentTemp[] = [
    {value: '0', viewValue: ' 11:00'},
    {value: '1', viewValue: ' 12:00'},
    {value: '2', viewValue: ' 13:30'},
    {value: '3', viewValue: ' 14:00'},
    {value: '4', viewValue: ' 15:30'},
    {value: '5', viewValue: ' 16:00'},
  ];

  constructor(private _formBuilder: FormBuilder, private _snackBar : MatSnackBar) {
    const currentYear = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.minDate.getMonth()+6);

  }

  ngOnInit() {
  }

  public scheduleAppointment(){
    this._snackBar.open("Appointment succesfully scheduled.", "Ok");
      setTimeout(() => {
        window.location.href="http://localhost:4200/home"
      }, 
      3000);
  }

  public scheduleAppointmentSystem(){
    window.location.href="http://localhost:4200/recommended-appointments"
  }

}
