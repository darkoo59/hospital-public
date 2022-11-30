import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { GenericDataService } from "src/app/integration/services/generic-data.service";
import { environment } from "src/environments/environment";
import { EqTender } from "../model/eq-tender.model";

@Injectable()
export class EqTenderService extends GenericDataService<EqTender[]>{

  constructor(private m_Http: HttpClient) { super() }
  
  fetchTenders(): Observable<any> {
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender`).pipe(
      tap((res:any) => {
        console.log(res);
        this.setData = res
      })
    ));
  }

  fetchTender(id: number): Observable<any> {
    return this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender/${id}`);
  }
}