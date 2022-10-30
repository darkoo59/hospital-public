import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule
  ]
})
export class PagesModule { }
