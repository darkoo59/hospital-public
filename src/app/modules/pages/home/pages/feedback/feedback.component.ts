import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { UserDataService } from '../../../login/log-user-data.service';
import { Feedback } from '../../model/feedback.model';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm = new FormGroup({
    feedbackText: new FormControl('', Validators.maxLength(500)),
    anonymity: new FormControl(),
    privatisation: new FormControl()
  })
  
  public feedback: Feedback = new Feedback();
  
  constructor(private feedbackService: FeedbackService, private _snackBar : MatSnackBar,private _userService : UserDataService) { }

  ngOnInit() {
    this._userService.m_UserData$.pipe(tap(user_data => {
      if(user_data?.UserId)this.feedback.patientId = user_data?.UserId;
    })).subscribe();
  }

  public createFeedback() {
    if(this.feedback.anonymity == true) this.feedback.patientId = 0;
    this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      this._snackBar.open("Feedback has been sent.", "Ok");
      setTimeout(() => {
        location.reload();
      }, 
      3000);
    });
  }

}
