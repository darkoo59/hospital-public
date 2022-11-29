import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { IntegrationRoutingModule } from "./integration-routing.module";
import { IntegrationComponent } from "./integration.component";
import { IntBloodTypeComponent } from "./pages/blood-types/int-blood-type.component";
import { RouterModule } from "@angular/router";
import { IntNavComponent } from "./components/nav/int-nav.component";
import { IntHomeComponent } from "./pages/home/int-home.component";
import { IntLoginComponent } from "./components/login/int-login.component";
import { NgLetModule } from 'ng-let';
import { IntSettingsComponent } from "./pages/settings/int-settings.component";

@NgModule({
  declarations: [
    IntegrationComponent, 
    IntNavComponent,
    IntHomeComponent,
    IntBloodTypeComponent,
    IntLoginComponent,
    IntSettingsComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgLetModule
  ],
  exports: []
})
export class IntegrationModule { } 