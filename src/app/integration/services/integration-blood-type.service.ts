import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

export interface BloodTypeDTO {
  bloodType: number
  apiKey: string
  bloodQuantity: number
}

@Injectable({
  providedIn: 'root'
})

export class IntegrationBloodTypeService {
  constructor(private http: HttpClient) {}

  checkBloodTypeAvailability(bloodTypeDTO: BloodTypeDTO): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('bloodType', bloodTypeDTO.bloodType);
    queryParams = queryParams.append('apiKey', bloodTypeDTO.apiKey);
    queryParams = queryParams.append('quantity', bloodTypeDTO.bloodQuantity);

    return this.http.get<boolean>(`${environment.integrationApiUrl}/BloodType`,{params: queryParams});
  }
}
