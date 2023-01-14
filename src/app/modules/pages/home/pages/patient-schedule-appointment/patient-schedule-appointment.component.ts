import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientScheduleAppointmentService, EventSchedule } from '../../services/patient-schedule-appointment.service';
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

  constructor(private _formBuilder: FormBuilder, private _snackBar : MatSnackBar, private _scheduleService : PatientScheduleAppointmentService) {
    const currentYear = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.minDate.getMonth()+6);

  }

  ngOnInit() {
    this.firstForm.dates.push(new Date());
  }

  public scheduleAppointment(){
    this.fourthForm.dates.push(new Date());
    const schedules : EventSchedule[] = [];
    schedules.push(this.firstForm);
    schedules.push(this.secondForm);
    schedules.push(this.thirdForm);
    schedules.push(this.fourthForm);
    
    console.log(schedules)

    this._scheduleService.sendEvents(schedules).subscribe(res => {
      
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
  }

  public secondNext(){
    this.secondForm.dates.push(new Date());
    this.thirdForm.dates.push(new Date());
  }

  public thirdNext(){
    this.thirdForm.dates.push(new Date());
    this.fourthForm.dates.push(new Date());
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
