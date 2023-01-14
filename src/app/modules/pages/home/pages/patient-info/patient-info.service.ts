import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PatientInfo } from './patient-info.component';
import { UserDataService } from '../../../login/log-user-data.service';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {

    route: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    public id: number = 0;
    
    constructor(private http: HttpClient, private userDataService : UserDataService) { 
      this.userDataService.m_UserData$.pipe(tap(user_data => {
        if(user_data != null)this.id = user_data.UserId;
      })).subscribe();
    }

    getById() : Observable<PatientInfo> {
      console.log(this.id);
        return this.http.get<PatientInfo>(this.route + 'api/patients/' + this.id, {headers: this.headers});
    }

}
