import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Feedback } from './model/feedback.model';
import { FeedbackService } from './services/feedback.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private feedbackService: FeedbackService, private _snackBar : MatSnackBar) { }

  public createFeedback() {
    if(this.feedback.anonymity == true) this.feedback.user = "Anonymus";
    this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      this._snackBar.open("Feedback has been sent.", "Ok");
      setTimeout(() => {
        location.reload();
      }, 
      3000);
    });
  }

}
