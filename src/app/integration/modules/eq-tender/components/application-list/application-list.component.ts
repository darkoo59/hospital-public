import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EMPTY, exhaustMap, Observable, Subject } from "rxjs";
import { TenderApplication } from "../../model/tender-application.model";
import { TenderApplicationService } from "../../services/tender-application.service";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {
  m_Data$: Observable<TenderApplication[] | null> = this.m_TenderApplicationService.m_Data$;

  constructor(private m_TenderApplicationService: TenderApplicationService, 
              private m_Dialog: MatDialog) { }

  isInPast(date: Date | null): boolean {
    if(!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0, 0, 0, 0);
    if (n <= now) return true;
    return false;
  }

  m_CancelApplication$:Subject<number> = new Subject<number>().pipe(
    exhaustMap((id:number ) => {
      return this.openCancelApplicationDialog(id).afterClosed().pipe(
        exhaustMap(ret => {
          return ret ? this.m_TenderApplicationService.fetchApplications() : EMPTY;
        })
      );
    })
  ) as Subject<number>;


  openCancelApplicationDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 
        action: this.m_TenderApplicationService.cancelApplication(id),
        text: "Are you sure you want to cancel your application?",
        title: "Cancel application"
      }
    });
  }

  m_DeclineApplication$:Subject<number> = new Subject<number>().pipe(
    exhaustMap((id:number ) => {
      return this.openDeclineDialog(id).afterClosed().pipe(
        exhaustMap(ret => {
          return ret ? this.m_TenderApplicationService.fetchApplications() : EMPTY;
        })
      );
    })
  ) as Subject<number>;

  openDeclineDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 
        action: this.m_TenderApplicationService.declineApplication(id),
        text: "Are you sure you want to decline your application?",
        title: "Decline application"
      }
    });
  }

  m_ConfirmApplication$:Subject<number> = new Subject<number>().pipe(
    exhaustMap((id:number ) => {
      return this.openConfirmDialog(id).afterClosed().pipe(
        exhaustMap(ret => {
          return ret ? this.m_TenderApplicationService.fetchApplications() : EMPTY;
        })
      );
    })
  ) as Subject<number>;

  openConfirmDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 
        action: this.m_TenderApplicationService.confirmApplication(id),
        text: "Are you sure you want to confirm your application?",
        title: "Confirm application"
      }
    });
  }

}