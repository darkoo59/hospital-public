import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EMPTY, exhaustMap, Observable, Subject } from "rxjs";
import { TenderApplication } from "../../model/tender-application.model";
import { LoadingService } from "../../services/loading.service";
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
              private m_Dialog: MatDialog, 
              private m_LoadingService: LoadingService) { }

  isInPast(date: Date): boolean {
    if(!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0, 0, 0, 0);
    if (n <= now) return true;
    return false;
  }

  cancelApplication$:Subject<number> = new Subject<number>().pipe(
    exhaustMap((id:number ) => {
      return this.openDialog(id).afterClosed().pipe(
        exhaustMap(ret => {
          return ret ? this.m_LoadingService.loadData() : EMPTY;
        })
      );
    })
  ) as Subject<number>;

  openDialog(id: number): MatDialogRef<any, any> {
    return this.m_Dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { action: this.m_TenderApplicationService.cancelApplication(id) }
    });
  }
}