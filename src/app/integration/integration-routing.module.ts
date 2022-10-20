import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IntBloodTypeComponent } from "./blood-types/int-blood-type.component";
import { IntegrationComponent } from "./integration.component";

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent
  },
  {
    path: 'blood-types', 
    component: IntBloodTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
