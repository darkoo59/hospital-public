import { Injectable } from "@angular/core";
import { Observable, forkJoin, catchError, EMPTY } from "rxjs";
import { GenericDataService } from "src/app/integration/services/generic-data.service";
import { EqTenderService } from "./eq-tender.service";
import { TenderApplicationService } from "./tender-application.service";

@Injectable()
export class LoadingService extends GenericDataService<boolean> {
  private m_FetchTenderData$: Observable<any> = this.m_EqTenderService.fetchTenders();
  private m_FetchApplicationData$: Observable<any> = this.m_TenderApplicationService.fetchApplications();

  constructor(private m_EqTenderService: EqTenderService, private m_TenderApplicationService: TenderApplicationService) {
    super();
    this.setData = true;
  }

  loadData(): Observable<any> {
    return forkJoin([this.m_FetchTenderData$, this.m_FetchApplicationData$], (d1, d2) => {
      this.setData = false;
    }).pipe(catchError((res: any) => {
      this.setError = res;
      this.setData = false
      return EMPTY;
    }));
  }

  resetTenderData(): void {
    this.m_EqTenderService.resetData();
    this.m_TenderApplicationService.resetData();
    this.clearError();
    this.setData = true;
  }
}