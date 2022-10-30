import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Feedback } from './model/feedback.model';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

 feedbackForm = new FormGroup({
    feedbackText: new FormControl('', Validators.maxLength(500)),
    anonymity: new FormControl(),
    privatisation: new FormControl()
  })
  
  public feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService) { }

  public createFeedback() {
    if(this.feedback.anonymity == true) this.feedback.user = "Anonymus";
    this.feedbackService.createFeedback(this.feedback).subscribe(res => {});
  }

}
