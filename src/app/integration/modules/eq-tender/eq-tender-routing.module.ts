import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EqTenderComponent } from "./eq-tender.component";

const routes: Routes = [
  {
    path: '',
    component: EqTenderComponent,
    // children: [
    //   {
    //     path: 'home',
    //     component: IntHomeComponent,
    //   },
    //   {
    //     path: 'bloodtypes',
    //     component: IntBloodTypeComponent
    //   },
    //   {
    //     path: 'settings',
    //     component: IntSettingsComponent
    //   },
    //   { path: '**', redirectTo: 'home', pathMatch: 'full' },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqTenderRoutingModule { }