import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllergensResponse, DoctorsResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
  })
  export class DoctorService {
  
    apiHost: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(
      private http: HttpClient
    ) { }
  
    getDoctors(): Observable<DoctorsResponse> {
      return this.http.get<DoctorsResponse>(this.apiHost + 'api/Doctor', {headers: this.headers})
    }
  
    
  }