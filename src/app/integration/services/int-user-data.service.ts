import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ThirdPartyUser {
  Id: number;
  Email: string;
  AppName: string;
  Server: string;
}

@Injectable({
  providedIn: 'root'
})
export class IntUserDataService{
  private m_TokenSubject: BehaviorSubject<null | string> = new BehaviorSubject<null | string>(null);
  private m_UserDataSubject: BehaviorSubject<null | ThirdPartyUser> = new BehaviorSubject<null | ThirdPartyUser>(null);

  public m_Token$ = this.m_TokenSubject.asObservable();
  public m_UserData$ = this.m_UserDataSubject.asObservable();

  constructor(){
    const token = localStorage.getItem('third-party-token');
    if(token){
      this.setToken = token;
    }
  }

  set setToken(token: null | string){
    if(token){
      this.m_TokenSubject.next(token);
      localStorage.setItem('third-party-token', token);
    }else{
      this.m_TokenSubject.next(null);
      localStorage.removeItem('third-party-token');
    }
  }

  set setUserData(userData: null | ThirdPartyUser){
    this.m_UserDataSubject.next(userData);
  }
}