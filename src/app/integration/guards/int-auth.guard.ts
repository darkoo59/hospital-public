import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { IntUserDataService } from "../services/int-user-data.service";

@Injectable({
  providedIn: 'root'
})
export class IntAuthGuard implements CanActivate {
  constructor(private m_UserDataService: IntUserDataService, private m_Router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.m_UserDataService.m_Token$.pipe(take(1), map(token => {
      return !!token ? true : this.m_Router.createUrlTree(['/integration/login']);
    }));
  }

}