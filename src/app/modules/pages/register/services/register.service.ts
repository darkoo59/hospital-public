import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, of, tap } from "rxjs";
import { RegisterRequest, RegisterResponse } from "../interfaces";

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

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Registration sucessfull.'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
  ) { }



  /*
   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  register(registerRequest: any): Observable<RegisterResponse> {
    // TODO
    return of(fakeRegisterResponse).pipe(
      tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
    );
    // return this.http.post<RegisterResponse>('/api/auth/register', registerRequest).pipe(
    // tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
    //  duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    // }))
    // )
  }

  
}