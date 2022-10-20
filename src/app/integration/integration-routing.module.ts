import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IntBloodTypeComponent } from "./blood-types/int-blood-type.component";
import { IntegrationComponent } from "./integration.component";
import { IntLoginComponent } from "./login/int-login.component";

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent,
    children: [
      {
        path: 'login',
        component: IntLoginComponent
      },
      {
        path: 'bloodtypes',
        component: IntBloodTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
