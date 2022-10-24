import { Component, OnInit } from '@angular/core';
import { IFeedback } from './feedback';
import { WelcomePageService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  feedbacks: IFeedback[] = [];

  constructor(private _welcomePageService: WelcomePageService) {
  }
 
  ngOnInit(): void {
    this.feedbacks = this._welcomePageService.getFeedbacks();
  }

}
