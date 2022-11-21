import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ConfirmService {
  
    apiHost: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(
      private http: HttpClient,
      private snackbar: MatSnackBar,
      private router: Router
    ) { }
  
    updatePatient(id: any){
      return this.http.put<any>(this.apiHost + 'api/Patients/activateAccount/' + id, {headers: this.headers}).pipe(
        tap(() => this.router.navigate(['../login']))
      )
    }
  
    
  }
  