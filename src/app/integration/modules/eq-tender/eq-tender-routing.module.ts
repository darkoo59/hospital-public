import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EqTenderComponent } from "./eq-tender.component";
import { AllTendersComponent } from "./pages/all-tenders.component";
import { ApplicationsComponent } from "./pages/applications.component";
import { TenderApplyComponent } from "./pages/tender-apply/tender-apply.component";
import { TendersComponent } from "./pages/tenders.component";

const routes: Routes = [
  {
    path: '',
    component: EqTenderComponent,
    children: [
      {
        path: 'tenders',
        component: TendersComponent,
        children: [
          {
            path: 'all',
            component: AllTendersComponent
          },
          {
            path: ':id',
            component: TenderApplyComponent
          },
          { path: '**', redirectTo: 'all', pathMatch: 'full' },
        ]
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      { path: '**', redirectTo: 'tenders', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqTenderRoutingModule { }