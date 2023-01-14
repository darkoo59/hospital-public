import { Component } from '@angular/core';
import { AuthService } from '../login/log-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private m_Router: Router, private m_AuthService: AuthService) { }

  public logout(){
    this.m_AuthService.logout();
    this.m_Router.navigate(['/login']);
  }
}
