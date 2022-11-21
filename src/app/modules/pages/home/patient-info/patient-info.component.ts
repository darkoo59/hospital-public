import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientInfoService } from './patient-info.service';

export interface PatientInfo {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname'];
  public patient: PatientInfo = {name:"Petar", surname:"Petrovic"};
  public patientInfo: PatientInfo[] = [];
  public dataSource = new MatTableDataSource(this.patientInfo);

  constructor(private _patientInfoService: PatientInfoService, private http:HttpClient) {}

  ngOnInit(): void {
    this.getPatientInfo();
  }

  public getPatientInfo(){
    this._patientInfoService.getById().subscribe(res => {
      this.patient = res;
      this.patientInfo.push(this.patient);
      this.dataSource = new MatTableDataSource(this.patientInfo);
    })
  }
}
