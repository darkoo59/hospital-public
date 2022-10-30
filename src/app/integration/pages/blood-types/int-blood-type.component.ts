import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { IntegrationBloodTypeService, BloodTypeDTO } from '../../services/integration-blood-type.service';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { IntUserDataService } from '../../services/int-user-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private m_IntegrationBloodTypeService: IntegrationBloodTypeService, private m_UserDataService: IntUserDataService, private m_SnackBar: MatSnackBar) { }

  onSubmit() : void {
    this.m_Errors.length = 0
    const dto: BloodTypeDTO = {
      bloodType: +this.form.get('blood-type-select')?.value, 
      apiKey: this.form.get('keyInput')?.value,
      bloodQuantity: this.form.get('blood-quantity')?.value,
      email: this.form.get('logged-user')?.value
    }

    if (dto.bloodQuantity == null) dto.bloodQuantity = 0

    if (this.form.get(['quantity-check'])?.value === false) dto.bloodQuantity = 0 
    
    this.form.updateValueAndValidity(); 
    if (!this.form.valid) return;
    
    this.m_IntegrationBloodTypeService.checkBloodTypeAvailability(dto)
      .pipe(catchError(res => {
        console.log(res);
        const error = res.error;
        if(error && error.message){
          this.m_Errors.push(error.message);
          return EMPTY;
        }
        this.m_Errors.push(error)
        return EMPTY;
      }))
      .subscribe(data => {
        if (data) {
          this.m_SnackBar.open(`Blood of the desired type is available`, `Close`);
        } else {
          this.m_SnackBar.open(`Blood of the desired type is not available`, `Close`);
        }
      });
  }

}
