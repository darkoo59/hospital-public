import { Component, OnInit } from '@angular/core';
import { Feedback } from '../home/model/feedback.model';
import { WelcomePageService } from './services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  public feedbacks: Feedback[] = [];

  constructor(private _welcomePageService: WelcomePageService) {
  }

  ngOnInit(): void {
    this.getFeedbacksPublic();
  }

  public getFeedbacksPublic() {
    this._welcomePageService.getFeedbacksPublic().subscribe(res => {
      this.feedbacks = res;
    });
   }

}
