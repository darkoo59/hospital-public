import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class EventSchedule{
  id: number = 0;
  dates: Date[] = [];
}
export class Appointment {
  patientId: number = 0;
  date: Date = new Date();
  doctorId: number = 0;
  time: string = '';
}
export class Specialization {
  specializationId: number = 0;
  name: string = '';
}
export class Doctor {
  doctorId: number = 0;
  name: string = '';
  surname: string = '';
}
@Injectable({
  providedIn: 'root'
})
export class PatientScheduleAppointmentService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }
  
  sendEvents(eventSchedule: EventSchedule[]): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/appointments/sendEvents', eventSchedule, {headers: this.headers});
  }
  getSpecializations(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(this.apiHost + 'api/Specilization', {headers: this.headers});
  }
  getDoctors(specialization: number): Observable<Doctor[]> {
    return this.http.post<Doctor[]>(this.apiHost + 'api/Appointments/bySpecialization?specializationId='+specialization, {headers: this.headers});
  }
  getAvailableAppointments(appointment : Appointment): Observable<string[]> {
    return this.http.post<string[]>(this.apiHost + 'api/PhysicianSchedules/appointments/getAvailable', appointment, {headers: this.headers});
  }
  createAppointment(appointment : Appointment): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/PhysicianSchedules/schedule', appointment, {headers: this.headers});
  }
}
