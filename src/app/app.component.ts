import { Component } from '@angular/core';
import { WelcomePageService } from './modules/pages/welcome/services/welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WelcomePageService]
})
export class AppComponent {
  title: string= "Medical site";
  
}
