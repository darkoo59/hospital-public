import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { GenericDataService } from "src/app/integration/services/generic-data.service";
import { environment } from "src/environments/environment";
import { TenderApplication } from "../model/tender-application.model";
import { CreateTenderApplicationDTO } from "./eq-tender.service";

@Injectable()
export class TenderApplicationService extends GenericDataService<TenderApplication[]> {

  constructor(private m_Http: HttpClient) { super() }

  createTenderApplication(dto: CreateTenderApplicationDTO): Observable<any> {
    return this.addErrorHandler(this.m_Http.post(`${environment.integrationApiUrl}/EquipmentTender/application`, dto));
  }

  fetchApplications() {
    return this.addErrorReader(this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender/application`).pipe(
      tap((res: any) => this.setData = res)
    ));
  }

  cancelApplication(id: number){
    return this.addErrorReader(this.m_Http.delete(`${environment.integrationApiUrl}/EquipmentTender/application/${id}`));
  }
}