import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IntBloodTypeComponent } from "./pages/blood-types/int-blood-type.component";
import { IntegrationComponent } from "./integration.component";
import { IntHomeComponent } from "./pages/home/int-home.component";
import { IntSettingsComponent } from "./pages/settings/int-settings.component";

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent,
    children: [
      {
        path: 'home',
        component: IntHomeComponent,
      },
      {
        path: 'bloodtypes',
        component: IntBloodTypeComponent
      },
      {
        path: 'settings',
        component: IntSettingsComponent
      },
      {
        path: 'eq-tender',
        loadChildren: () => import('./modules/eq-tender/eq-tender.module').then(m => m.EqTenderModule)
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
