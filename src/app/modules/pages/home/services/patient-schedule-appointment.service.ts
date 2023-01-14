import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class EventSchedule{
  id: number = 0;
  dates: Date[] = [];
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
  
}
