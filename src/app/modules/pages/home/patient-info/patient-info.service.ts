import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientInfo } from './patient-info.component';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {

    route: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }

    getById() : Observable<PatientInfo> {
        return this.http.get<PatientInfo>(this.route + 'api/patients/getById/2', {headers: this.headers});
    }

}
