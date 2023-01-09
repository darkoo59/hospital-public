import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['name', 'surname', 'jmbg', 'email', 'address'];
  public patient: PatientInfo = {name:"Petar", surname:"Petrovic", jmbg:"1205997202356", email:"markomarkovic1@gmail.com", address:"Marka Markovica 1"};
  public patientInfo: PatientInfo[] = [{name:"Marko", surname:"Markovic", jmbg:"1205997202356", email:"markomarkovic1@gmail.com", address:"Marka Markovica 1"}];
  public dataSource = new MatTableDataSource(this.patientInfo);

  constructor(private _patientInfoService: PatientInfoService, private http:HttpClient) {}

  ngOnInit(): void {
    //this.getPatientInfo();
    this.dataSource = new MatTableDataSource(this.patientInfo);
  }

 // public getPatientInfo(){
   // this._patientInfoService.getById().subscribe(res => {
   //   this.patient = res;
   //   this.patientInfo.push(this.patient);
   //   this.dataSource = new MatTableDataSource(this.patientInfo);
   // })
 // }
}
