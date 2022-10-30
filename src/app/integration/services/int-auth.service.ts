import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, tap, switchMap, EMPTY, take, map } from "rxjs"
import { environment } from "src/environments/environment"
import { IntUserDataService } from "./int-user-data.service"

export interface LoginDTO {
  email: string;
  password: string;
}

export interface ChangeUserPasswordDTO {
  oldPassword: string;
  newPassword: string;
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
      map((res: any) => {
        this.m_UserDataService.setToken = res['content'];
        console.log(res);
      }),
      switchMap(_ => this.getUserData())
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

  changeUserPassword(dto: ChangeUserPasswordDTO): Observable<any> {
    return this.m_Http.patch(`${environment.integrationApiUrl}/Users/password`, dto);
  }
}
