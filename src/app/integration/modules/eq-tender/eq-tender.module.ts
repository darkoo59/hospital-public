import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TenderItemListComponent } from "./components/tender-item-list/tender-item-list.component";
import { TenderListComponent } from "./components/tender-list/tender-list.component";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { EqTenderService } from "./services/eq-tender.service";
import { MaterialModule } from "src/app/material/material.module"

@NgModule({
  providers: [EqTenderService],
  declarations: [
    EqTenderComponent,
    TenderListComponent,
    TenderItemListComponent
  ],
  imports: [
    CommonModule,
    EqTenderRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class EqTenderModule { }