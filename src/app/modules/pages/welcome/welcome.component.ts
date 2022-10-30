import { Component, OnInit } from '@angular/core';
import { WelcomePageService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  feedbacks: any;

  constructor(private _welcomePageService: WelcomePageService) {
  }
 
  ngOnInit(): void {
    // this._welcomePageService.getFeedbacks().subscribe(res => {this.feedbacks = res});
  }

}
