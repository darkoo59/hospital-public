import { Component, OnInit } from '@angular/core';

export interface PatientInfo {
  name: string;
  surname: string;
  jmbg: number;
  email: string;
  address: string;
  bloodType: string;
  allergens: string;
}

const ELEMENT_DATA: PatientInfo[] = [
  {name: 'Petar', surname: 'Petrović', jmbg: 2506997202356, email: 'peropetar25@gmail.com', address: 'Bulevar Oslobođenja 37', bloodType: 'A+', allergens: 'Penicilin, Kikiriki'}
];

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent {
  displayedColumns: string[] = ['name', 'surname', 'jmbg', 'email', 'address', 'bloodType', 'allergens'];
  dataSource = ELEMENT_DATA;
}
