import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

export interface LoginDTO {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class IntegrationAuthService {
  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(`${environment.integrationApiUrl}/login`, loginDTO)
  }
}
