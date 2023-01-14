import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientInfoService } from './patient-info.service';

export interface PatientInfo {
  name: string;
  surname: string;
  jmbg: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  public patient: PatientInfo = {name:"Petar", surname:"Petrovic", jmbg:"1205997202356", email:"markomarkovic1@gmail.com", address:"Marka Markovica 1"};

  constructor(private _patientInfoService: PatientInfoService, private http:HttpClient) {}

  ngOnInit(): void {
    this.getPatientInfo();
  }

  public getPatientInfo(){
      this._patientInfoService.getById().subscribe(res => {
      this.patient = res;
    })
  }
}
