import { Component } from "@angular/core";
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { catchError, EMPTY } from "rxjs";
import { ChangeUserPasswordDTO, IntAuthService } from "../../services/int-auth.service";

@Component({
  selector: 'app-int-settings',
  templateUrl: './int-settings.component.html',
  styleUrls: ['./int-settings.component.scss']
})
export class IntSettingsComponent {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];

  constructor(private m_AuthService: IntAuthService, private m_Router: Router, private m_SnackBar: MatSnackBar) { }

  onSubmit() {
    this.m_Errors.length = 0;

    if (this.m_Form.valid) {
      const raw = this.m_Form.getRawValue();
      const dto: ChangeUserPasswordDTO = { oldPassword: raw['oldPassword'], newPassword: raw['newPassword'] }
      this.m_AuthService.changeUserPassword(dto)
        .pipe(
          catchError((res: any) => {
            console.log(res.error);
            const error = res.error;
            if(error && error.message){
              this.m_Errors.push(error.message);
              return EMPTY;
            }
            this.m_Errors.push(error)
            return EMPTY;
          })
        ).subscribe((_: any) => {
          this.m_SnackBar.open(`Password changed successfully`, 'close', { duration: 4000 });
          this.m_Router.navigate(['integration/home']);
        });
    }
  }

  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'oldPassword': new UntypedFormControl(null, [Validators.required]),
      'newPassword': new UntypedFormControl(null, [Validators.required]),
      'confirmPassword': new UntypedFormControl(null, [Validators.required])
    }, [IntSettingsComponent.MatchValidator('newPassword', 'confirmPassword')]);
  }

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      if (sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value) {
        sourceCtrl?.setErrors({ mismatch: true });
        targetCtrl?.setErrors({ mismatch: true });
        return { mismatch: true };
      }
      if (sourceCtrl?.hasError('mismatch')) sourceCtrl.updateValueAndValidity();
      if (targetCtrl?.hasError('mismatch')) targetCtrl.updateValueAndValidity();
      return null;
    };
  }
}
