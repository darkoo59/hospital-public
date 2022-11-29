import { Injectable } from "@angular/core";
import { GenericDataService } from "src/app/integration/services/generic-data.service";
import { EqTender } from "../model/eq-tender.model";

@Injectable()
export class EqTenderService extends GenericDataService<EqTender[]>{
  
}