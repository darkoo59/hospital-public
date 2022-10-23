import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, tap, switchMap, catchError, of, EMPTY, take } from "rxjs"
import { environment } from "src/environments/environment"
import { IntUserDataService } from "./int-user-data.service"

export interface LoginDTO {
  email: string
  password: string
}

@Injectable({
  providedIn: "root"
})
export class IntAuthService {
  constructor(private m_UserDataService: IntUserDataService, private m_Http: HttpClient) { 
    this.m_UserDataService.m_Token$.pipe(
      take(1),
      switchMap(token => {
        if (token) return this.getUserData();
        return EMPTY;
      })
    ).subscribe();
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.m_Http.post(`${environment.integrationApiUrl}/Users/login`, loginDTO).pipe(
      tap((res: any) => {
        this.m_UserDataService.setToken = res['content'];
        console.log(res);
      }),
      switchMap(_ => this.getUserData().pipe(
        catchError(er => of(er))
      ))
    );
  }

  logout(): void {
    this.m_UserDataService.setToken = null;
    this.m_UserDataService.setUserData = null;
  }

  getUserData(): Observable<any> {
    return this.m_Http.get(`${environment.integrationApiUrl}/Users/data`).pipe(
      tap((res: any) => {
        console.log(res);
        this.m_UserDataService.setUserData = res;
      })
    )
  }
}
