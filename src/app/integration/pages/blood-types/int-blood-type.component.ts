import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { IntegrationBloodTypeService, BloodTypeDTO } from '../../services/integration-blood-type.service';
import { catchError, of, Subscription } from 'rxjs';
import { IntUserDataService, ThirdPartyUser } from '../../services/int-user-data.service';

@Component({
  selector: 'app-int-blood-type',
  templateUrl: './int-blood-type.component.html',
  styleUrls: ['./int-blood-type.component.css']
})
export class IntBloodTypeComponent implements OnInit, OnDestroy {

  form: UntypedFormGroup = new UntypedFormGroup({
    'blood-bank': new FormControl('Some blood bank', Validators.required),
    'logged-user': new FormControl('Logged user', Validators.required),
    'blood-type-select': new FormControl(null, Validators.required),
    'keyInput': new FormControl(null, Validators.required)
  })
  m_Errors: string[] = [];

  constructor(private m_IntegrationBloodTypeService: IntegrationBloodTypeService, private m_UserDataService: IntUserDataService) { }

  subs: Subscription[] = [];
  user: ThirdPartyUser | null = null;

  ngOnInit(): void {
    const sub = this.m_UserDataService.m_UserData$.subscribe(data => this.user = data);
    this.subs.push(sub);
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }

  onSubmit() : void {
    this.m_Errors.length = 0
    const dto: BloodTypeDTO = {
      bloodType: +this.form.get('blood-type-select')?.value, 
      apiKey: this.form.get('keyInput')?.value
    }
    
    this.form.updateValueAndValidity(); 
    if (!this.form.valid) return;

    this.m_IntegrationBloodTypeService.checkBloodTypeAvailability(dto)
      .pipe(catchError(res => {
        console.log(res);
        const errors = res.error.errors;

        if (!errors) {
          this.m_Errors.push(res.error);
          return of();
        }

        for (let e in errors) {
          this.m_Errors.push(errors[e]);
        }
        return of();
      }))
      .subscribe(_ => {
      });
  }

}
