import { Component, OnInit } from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-int-blood-type',
  templateUrl: './int-blood-type.component.html',
  styleUrls: ['./int-blood-type.component.css']
})
export class IntBloodTypeComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    'blood-bank': new FormControl('Some blood bank', Validators.required),
    'logged-user': new FormControl('Logged user', Validators.required),
    'blood-type-select': new FormControl(null, Validators.required)
  })


  constructor() { }

  onSubmit() : void {
    if(!this.form.valid) return;
    console.log(this.form.getRawValue())
  }

  ngOnInit() {

  }

}
