import { Component } from '@angular/core'
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { IntAuthService, LoginDTO } from '../../services/int-auth.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-login',
  templateUrl: './int-login.component.html',
  styleUrls: ['./int-login.component.scss']
})
export class IntLoginComponent {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];

  constructor(private m_IntegrationAuthService: IntAuthService, private m_SnackBar: MatSnackBar, private m_Router: Router) {}

  onSubmit() {
    this.m_Errors.length = 0;
    const dto: LoginDTO = this.m_Form.getRawValue();
    if (!this.m_Form.valid) return;

    this.m_IntegrationAuthService.login(dto)
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
        this.m_SnackBar.open(`Third-party user logged in`, 'close', { duration: 4000 });
        this.m_Router.navigate(['/integration']);
      });
  }

  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'email': new UntypedFormControl(null, [Validators.required, Validators.email]),
      'password': new UntypedFormControl(null, [Validators.required])
    });
  }
}
