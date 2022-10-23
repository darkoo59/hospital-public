import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { IntegrationAuthService } from "./services/int-auth.service";

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent {
  
  constructor(private m_AuthService: IntegrationAuthService, private m_SnackBar: MatSnackBar, private m_Router: Router){}
  logout(): void {
    this.m_AuthService.logout();
    this.m_SnackBar.open(`Logged out successfuly`, 'close', { duration: 4000 });
    this.m_Router.navigate(['integration/login']);
  }
}