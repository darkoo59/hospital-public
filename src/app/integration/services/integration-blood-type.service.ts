import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

export interface BloodTypeDTO {
  bloodType: number
  apiKey: string
  bloodQuantity: number
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class IntegrationBloodTypeService {
  constructor(private http: HttpClient) {}

  checkBloodTypeAvailability(bloodTypeDTO: BloodTypeDTO): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('bloodType', bloodTypeDTO.bloodType);
    queryParams = queryParams.append('bloodQuantity', bloodTypeDTO.bloodQuantity);
    queryParams = queryParams.append('userEmail', bloodTypeDTO.email);

    const httpOptions = {
      headers: new HttpHeaders().set('apiKey', bloodTypeDTO.apiKey),
      params: queryParams
    }
    return this.http.get(`${environment.integrationApiUrl}/BloodType`, httpOptions);
  }
}
