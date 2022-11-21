import { Component, OnInit } from '@angular/core';
import { WelcomePageService } from './modules/pages/welcome/services/welcome.service';
import { AuthService } from './modules/pages/login/log-auth.service';
import { UserDataService } from './modules/pages/login/log-user-data.service';
import { EMPTY, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WelcomePageService]
})
export class AppComponent implements OnInit{
  constructor(private authService : AuthService, private userDataService : UserDataService){}
  ngOnInit(): void {
    this.userDataService.m_Token$.pipe(take(1), switchMap(token => {
      return !!token ? this.authService.getUserData() : EMPTY;
    })).subscribe();
  }
  title: string= "Medical site";
  
}
