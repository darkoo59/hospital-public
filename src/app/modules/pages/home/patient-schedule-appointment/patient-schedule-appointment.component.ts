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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
