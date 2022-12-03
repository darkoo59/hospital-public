import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { GenericDataService } from "src/app/integration/services/generic-data.service";
import { environment } from "src/environments/environment";
import { EqTender } from "../model/eq-tender.model";

export interface CreateTenderOfferDTO {
  cost: number;
  tenderRequirementId: number;
}

export interface CreateTenderApplicationDTO {
  note: string;
  equipmentTenderId: number;
  tenderOffers: CreateTenderOfferDTO[];
}

@Injectable()
export class EqTenderService extends GenericDataService<EqTender[]>{

  constructor(private m_Http: HttpClient) { super() }

  fetchTenders(): Observable<any> {
    return this.addErrorReader(this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender/bloodbank`).pipe(
      tap((res: any) => this.setData = res)
    ));
  }

  fetchTender(id: number): Observable<any> {
    return this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender/bloodbank/${id}`);
  }
}