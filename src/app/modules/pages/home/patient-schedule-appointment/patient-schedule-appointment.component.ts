import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
    {value: 'allergist-0', viewValue: 'Allergists/Immunologists'},
    {value: 'anesthesiologists-1', viewValue: 'Anesthesiologists'},
    {value: 'cardiologists-2', viewValue: 'Cardiologists'},
    {value: 'colon-3', viewValue: 'Colon and Rectal Surgeons'},
    {value: 'dermatologists-4', viewValue: 'Dermatologists'},
    {value: 'endocrinologists-5', viewValue: 'Endocrinologists'},
  ];

  doctors: Doctor[] = [
    {value: 'vukasin-0', viewValue: 'Vukašin Vukašinović'},
    {value: 'anamarija-1', viewValue: 'Anamarija Marijanović'},
    {value: 'arsenije-2', viewValue: 'Aresnije Arsenović'},
    {value: 'magdalena-3', viewValue: 'Magdalena Magdalenović'},
    {value: 'vasilije-4', viewValue: 'Vasilije Vasilić'},
    {value: 'viktorija-5', viewValue: 'Viktorija Viktorinović'},
  ];

  apps: AppointmentTemp[] = [
    {value: '0', viewValue: '01.12.2022. 11:00'},
    {value: '1', viewValue: '01.12.2022. 12:00'},
    {value: '2', viewValue: '01.12.2022. 13:00'},
    {value: '3', viewValue: '01.12.2022. 14:00'},
    {value: '4', viewValue: '01.12.2022. 15:00'},
    {value: '5', viewValue: '01.12.2022. 16:00'},
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
