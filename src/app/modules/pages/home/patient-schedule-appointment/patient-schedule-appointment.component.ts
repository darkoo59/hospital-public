import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
