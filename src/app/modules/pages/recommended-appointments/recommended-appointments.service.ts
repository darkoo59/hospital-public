import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Time } from '@angular/common';

export interface Doctor{
  doctorId: number;
  name: string;
  surname: string;
}
export interface Appointment{
  name: string;
  date: string;
  time: string;
  surname: string;
  doctorId: number;
}
export interface AppointmentDTO{
  from: Date;
  to: Date;
  doctor: number;
  priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecommendedAppointmentsService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiHost + 'api/Doctor', {headers: this.headers})
  }
  getAppointments(app: AppointmentDTO): Observable<Appointment[]> {
    return this.http.post<Appointment[]>(this.apiHost + 'api/Appointments/getRecommendedAppointments', app, {headers: this.headers})
  }
  scheduleAppointment(appointment : Appointment): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Appointments/schedule', appointment, {headers: this.headers})
  }
}
