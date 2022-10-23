import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { IntegrationBloodTypeService, BloodTypeDTO } from '../../services/integration-blood-type.service';
import { catchError, Observable, of, Subscription } from 'rxjs';
import { IntUserDataService, ThirdPartyUser } from '../../services/int-user-data.service';

@Component({
  selector: 'app-int-blood-type',
  templateUrl: './int-blood-type.component.html',
  styleUrls: ['./int-blood-type.component.css']
})
export class IntBloodTypeComponent implements OnInit {

  subs: Subscription[] = []

  ngOnInit(): void {
    const sub = this.m_UserDataService.m_UserData$.subscribe(data => {
      this.form.controls["blood-bank"].setValue(data?.AppName)
      this.form.controls["logged-user"].setValue(data?.Email)
    })
    this.subs.push(sub)
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  form: UntypedFormGroup = new UntypedFormGroup({
    'blood-bank': new FormControl(null, Validators.required),
    'logged-user': new FormControl(null, Validators.required),
    'blood-type-select': new FormControl(null, Validators.required),
    'keyInput': new FormControl(null, Validators.required),
    'blood-quantity': new FormControl(null),
    'quantity-check': new FormControl(null)
  })


  m_Errors: string[] = [];

  constructor(private m_IntegrationBloodTypeService: IntegrationBloodTypeService, private m_UserDataService: IntUserDataService) { }

  onSubmit() : void {
    this.m_Errors.length = 0
    const dto: BloodTypeDTO = {
      bloodType: +this.form.get('blood-type-select')?.value, 
      apiKey: this.form.get('keyInput')?.value,
      bloodQuantity: this.form.get('blood-quantity')?.value | 0
    }

    if (this.form.get(['quantity-check'])?.value === false) dto.bloodQuantity = 0 
    
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
