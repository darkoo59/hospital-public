import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { IntegrationRoutingModule } from "./integration-routing.module";
import { IntegrationComponent } from "./integration.component";
import { IntLoginComponent } from "./login/int-login.component";
import { IntBloodTypeComponent } from "./blood-types/int-blood-type.component";

@NgModule({
  declarations: [
    IntegrationComponent, 
    IntLoginComponent,
    IntBloodTypeComponent,
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []
})
export class IntegrationModule { } 