import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TenderItemListComponent } from "./components/tender-list/tender-item-list/tender-item-list.component";
import { TenderListComponent } from "./components/tender-list/tender-list.component";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { EqTenderService } from "./services/eq-tender.service";
import { MaterialModule } from "src/app/material/material.module"
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";
import { NgLetModule } from "ng-let";
import { TendersComponent } from "./pages/tenders.component";
import { ApplicationsComponent } from "./pages/applications.component";
import { TenderApplyComponent } from "./pages/tender-apply/tender-apply.component";
import { AllTendersComponent } from "./pages/all-tenders.component";
import { CreateOfferListComponent } from "./components/create-offer-list/create-offer-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TenderApplicationService } from "./services/tender-application.service";
import { ApplicationListComponent } from "./components/application-list/application-list.component";
import { OfferListComponent } from "./components/application-list/offer-list/offer-list.component";
import { LoadingService } from "./services/loading.service";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { BloodPipe } from "./pipes/blood.pipe";

@NgModule({
  providers: [EqTenderService, TenderApplicationService, LoadingService],
  declarations: [
    EqTenderComponent,
    TenderListComponent,
    TenderItemListComponent,
    TendersComponent,
    AllTendersComponent,
    ApplicationsComponent,
    TenderApplyComponent,
    CreateOfferListComponent,
    ApplicationListComponent,
    OfferListComponent,
    ConfirmDialogComponent,
    BloodPipe
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