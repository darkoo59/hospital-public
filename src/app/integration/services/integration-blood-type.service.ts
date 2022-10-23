import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

export interface BloodTypeDTO {
  bloodType: number
  apiKey: string
}

@Injectable({
  providedIn: 'root'
})

export class IntegrationBloodTypeService {
  constructor(private http: HttpClient) {}

  checkBloodTypeAvailability(bloodTypeDTO: BloodTypeDTO): Observable<any> {
    return this.http.post(`${environment.integrationApiUrl}/BloodType`, bloodTypeDTO)
  }
}
