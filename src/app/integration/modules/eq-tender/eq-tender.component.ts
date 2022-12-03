import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, Observable, tap } from "rxjs";
import { NavRoute } from "../../components/nav/int-nav.component";
import { LoadingService } from "./services/loading.service";

@Component({
  templateUrl: './eq-tender.component.html',
  styleUrls: ['./eq-tender.component.scss']
})
export class EqTenderComponent {

  m_FetchData$: Observable<any> = this.m_LoadingService.loadData();

  m_Error$: Observable<any> = this.m_LoadingService.m_Error$.pipe(
    tap(err => {
      if(err) this.m_SnackBar.open(err!, 'close', { duration: 4000, verticalPosition: 'top' });
    })
  );

  m_Routes: NavRoute[] = [
    {
      path: 'tenders',
      title: 'Available Tenders'
    },
    {
      path: 'applications',
      title: 'My Applications'
    },
  ];

  m_ActiveLink: string = this.m_Routes[0].path;
  m_ActiveLink$ = this.m_Router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    tap((route: any) => {
      const arr = route.url.split('/');
      this.m_ActiveLink = arr[arr.length - 1];
      if (this.m_ActiveLink === 'eq-tender')
        this.m_ActiveLink = 'tenders';
    })
  );
  m_Loading$: Observable<boolean | null> = this.m_LoadingService.m_Data$;

  constructor(private m_Route: ActivatedRoute, 
              private m_LoadingService: LoadingService,
              private m_SnackBar: MatSnackBar, 
              private m_Router: Router) { }

  ngOnInit() {
    this.m_ActiveLink = this.m_Route.snapshot.firstChild?.url[0].path!;
  }

  ngOnDestroy(): void {
    this.m_LoadingService.resetTenderData();
  }

  changeTab(path: string): void {
    this.m_ActiveLink = path
  }
}