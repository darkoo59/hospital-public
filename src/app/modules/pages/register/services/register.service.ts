import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RegisterPageService {

    apiHost: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


    constructor(private http: HttpClient) {}

    // getFeedbacksPublic() : Observable<Feedback[]> {
    //     return this.http.get<Feedback[]>(this.apiHost + 'api/feedbacks/feedbacksPublic', {headers: this.headers});
    // }

    createPatient(patient: any): Observable<any> {
        return this.http.post<any>(this.apiHost + 'api/register/patient', patient, {headers: this.headers});
      }

}