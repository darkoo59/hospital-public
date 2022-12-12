import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, tap } from "rxjs";
import { TenderApplicationService } from "../services/tender-application.service";

@Component({
  template: `
    <div *ngLet="{data: m_FetchData$ | async, error: m_Error$ | async} as vm">
      <application-list *ngIf="!m_Loading"></application-list>
      <page-loader *ngIf="m_Loading"></page-loader>
    </div>  
  `
})
export class ApplicationsComponent {
  m_Loading: boolean = true;
  m_FetchData$: Observable<any> = this.m_TenderApplicationService.fetchApplications().pipe(tap(_ => this.m_Loading = false));

  m_Error$: Observable<string | null> = this.m_TenderApplicationService.m_Error$.pipe(
    tap(error => {
      if(error) this.m_SnackBar.open(error!, 'close', { duration: 4000, verticalPosition: 'top' })
    })
  );

  constructor(private m_TenderApplicationService: TenderApplicationService, private m_SnackBar: MatSnackBar){}

  ngOnDestroy(): void {
    this.m_TenderApplicationService.resetData();
  }
}