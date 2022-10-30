import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { IntUserDataService, ThirdPartyUser } from "../../services/int-user-data.service";

@Component({
  selector: 'app-int-home',
  templateUrl: './int-home.component.html',
  styleUrls: ['./int-home.component.scss']
})
export class IntHomeComponent {
  m_User$: Observable<ThirdPartyUser | null> = this.m_UserDataService.m_UserData$;

  constructor(private m_UserDataService: IntUserDataService) { }
}
