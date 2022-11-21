import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ConfirmService } from './confirm.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private confirmService: ConfirmService
    ) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.updatePatient(id);
  }

  updatePatient(id: any) {
    this.confirmService.updatePatient(id).pipe(
      // If registration was successfull, then navigate to login route
      tap(() => this.router.navigate(['../login']))
    ).subscribe();
  }



}
