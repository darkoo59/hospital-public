import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TenderItemListComponent } from "./components/tender-item-list/tender-item-list.component";
import { TenderListComponent } from "./components/tender-list/tender-list.component";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { EqTenderService } from "./services/eq-tender.service";
import { MaterialModule } from "src/app/material/material.module"
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";
import { NgLetModule } from "ng-let";
import { TendersComponent } from "./pages/tenders.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { TenderApplyComponent } from "./pages/tender-apply/tender-apply.component";
import { AllTendersComponent } from "./pages/all-tenders/all-tenders.component";
import { OfferListComponent } from "./components/offer-list/offer-list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  providers: [EqTenderService],
  declarations: [
    EqTenderComponent,
    TenderListComponent,
    TenderItemListComponent,
    TendersComponent,
    AllTendersComponent,
    ApplicationsComponent,
    TenderApplyComponent,
    OfferListComponent
  ],
  imports: [
    CommonModule,
    EqTenderRoutingModule,
    MaterialModule,
    PageLoaderModule,
    NgLetModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class EqTenderModule { }