import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Appointment, AppointmentDTO, RecommendedAppointmentsService } from './recommended-appointments.service';

@Component({
  selector: 'app-recommended-appointments',
  templateUrl: './recommended-appointments.component.html',
  styleUrls: ['./recommended-appointments.component.css']
})
export class RecommendedAppointmentsComponent implements OnInit {
  findForm: UntypedFormGroup = this.formInstance;
  priorities: string[] = [
  ]
  selectedRow: any;
  public flag: boolean = true; 
  public appointments: Appointment[] = [];
  displayedColumns: string[] = ['date', 'time', 'doctor'];
  public dataSource = new MatTableDataSource(this.appointments);
  
  constructor(private liveAnnouncer: LiveAnnouncer, private appointmentService : RecommendedAppointmentsService, private m_Router: Router) { }
  doctors: any = [];
  ngOnInit(): void {
    this.flag = true;
    this.appointmentService.getDoctors().subscribe( res => {
      this.doctors = res
    });
    this.priorities.push('Doctor')
    this.priorities.push('Date')
  }
  onRowClicked(row : any): void {
    this.selectedRow = row;
  }
  find() : void{
    this.flag = false;
    const dto: AppointmentDTO = this.findForm.getRawValue();
    if (!this.findForm.valid) return;
    this.appointmentService.getAppointments(dto).subscribe(res => {
      this.appointments = res;
      this.dataSource = new MatTableDataSource(this.appointments);
    });
  }
  schedule() : void{
    console.log(this.selectedRow);
    this.appointmentService.scheduleAppointment(this.selectedRow).subscribe(res => {
      this.m_Router.navigate(['/home']);
    });
  }
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'from': new UntypedFormControl(null, [Validators.required]),
      'to': new UntypedFormControl(null, [Validators.required]),
      'doctor': new UntypedFormControl(null, [Validators.required]),
      'priority': new UntypedFormControl(null, [Validators.required])
    });
  }
}
